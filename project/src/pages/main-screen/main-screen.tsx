import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { store } from '../../store';
import { updateLayout } from '../../store/layout/actions';
import { fetchOffersAction } from '../../store/offers/api-actions';

import Loader from '../../components/loader/loader';
import MainScreenContent from '../../components/main-screen-content/main-screen-content';

store.dispatch(fetchOffersAction());

function MainScreen() {
  const areOffersLoading = useAppSelector((state) => state.offers.areOffersLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateLayout({
      hasHeaderNavigation: true,
      pageCssClass: 'page--gray page--main',
      mainCssClass: 'page__main--index',
    }));
  }, [dispatch]);

  return (
    areOffersLoading
      ? <Loader />
      : <MainScreenContent />
  );
}

export default MainScreen;
