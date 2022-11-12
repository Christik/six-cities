import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, updateOffers } from '../../store/actions';

import Header from '../../components/header/header';
import LocationNav from '../../components/location-nav/location-nav';
import Sorting from '../../components/sorting/sorting';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

function MainScreen() {
  const cities = useAppSelector((state) => state.cities);
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);

  const dispatch = useAppDispatch();

  return (
    <div className="page page--gray page--main">
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Header hasNavigation />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationNav
          locations={cities}
          currentLocation={currentCity}
          onLocationChange={(city) => {
            dispatch(changeCity(city));
            dispatch(updateOffers(city));
          }}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">
                {offers.length} places to stay in {currentCity}
              </b>

              <Sorting />

              <OfferList
                cssClass='cities__places-list tabs__content'
                offers={offers}
              />
            </section>

            <div className="cities__right-section">
              <Map
                cssClass="cities__map"
                city={offers[0].city}
                points={offers.map((offer) => offer.location)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
