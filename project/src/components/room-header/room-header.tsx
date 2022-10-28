import { Offer } from '../../types/offer';
import { getLabelByOfferType } from '../../utils';
import PremiumLabel from '../premium-label/premium-label';

type RoomHeaderProps = {
  offer: Offer;
};

function RoomHeader({offer}: RoomHeaderProps) {
  return (
    <>
      {offer.isPremium && <PremiumLabel />}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
      </div>

      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">4.8</span>
      </div>

      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {getLabelByOfferType(offer.type)}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>

      <div className="property__price">
        <b className="property__price-value">&euro;{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

export default RoomHeader;
