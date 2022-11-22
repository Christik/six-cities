import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { OfferId } from '../../types/offer';

import { store } from '../../store';
import { updateLayout } from '../../store/layout/actions';
import {
  fetchOfferAction,
  fetchOffersNearByAction,
  fetchReviewsAction } from '../../store/offer/api-actions';

import { useAppDispatch, useAppSelector } from '../../hooks';

import Gallery from '../../components/gallery/gallery';
import RoomHeader from '../../components/room-header/room-header';
import RoomInside from '../../components/room-inside/room-inside';
import Host from '../../components/host/host';
import RoomReviews from '../../components/room-reviews/room-reviews';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';

function RoomScreen() {
  const offer = useAppSelector((state) => state.offer.offer);
  const isOfferLoading = useAppSelector((state) => state.offer.isOfferLoading);

  const offersNearBy = useAppSelector((state) => state.offer.offersNearBy);
  const areOffersNearByLoading = useAppSelector((state) => state.offer.areOffersNearBy);

  const reviews = useAppSelector((state) => state.offer.reviews);
  const areReviewsLoading = useAppSelector((state) => state.offer.areReviewsLoading);

  const {id} = useParams() as {id: string};
  const offerId: OfferId = Number(id);

  const dispatch = useAppDispatch();

  const areDataLoading =
    (isOfferLoading || offer === null || areOffersNearByLoading || areReviewsLoading);

  useEffect(() => {
    dispatch(updateLayout({
      hasHeaderNavigation: true,
      pageCssClass: '',
      mainCssClass: 'page__main--property',
    }));
  }, [dispatch]);

  useEffect(() => {
    store.dispatch(fetchOfferAction(offerId));
    store.dispatch(fetchOffersNearByAction(offerId));
    store.dispatch(fetchReviewsAction(offerId));
  }, [offerId]);

  if (areDataLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="property">
        <Gallery images={offer.images} alt={offer.title} />

        <div className="property__container container">
          <div className="property__wrapper">
            <RoomHeader offer={offer} />
            <RoomInside goods={offer.goods} />
            <Host
              user={offer.host}
              description={offer.description}
            />
            <RoomReviews reviews={reviews} />
          </div>
        </div>

        <Map
          cssClass='property__map'
          city={offer.city}
          points={offersNearBy.map((offerNearBy) => offerNearBy.location)}
        />
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>

          <OfferList
            cssClass="near-places__list"
            offers={offersNearBy}
          />
        </section>
      </div>
    </>
  );
}

export default RoomScreen;
