import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';
import { Review } from '../types/review';

import {
  loadOffer,
  loadOffersNearBy,
  loadReviews,
  setOfferLoadingStatus,
  setOffersNearByLoadingStatus,
  setReviewsLoadingStatus } from './offer-actions';

type InitialState = {
  offer: Offer | null;
  isOfferLoading: boolean;
  offersNearBy: Offer[];
  areOffersNearBy: boolean;
  reviews: Review[];
  areReviewsLoading: boolean;
};

const initialState: InitialState = {
  offer: null,
  isOfferLoading: false,
  offersNearBy: [],
  areOffersNearBy: false,
  reviews: [],
  areReviewsLoading: false,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(setOffersNearByLoadingStatus, (state, action) => {
      state.areOffersNearBy = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.areReviewsLoading = action.payload;
    });
});