import { RoomTypeLabel, RoomType } from './const';
import { OfferType } from './types/offer';

type RoomTypeKey = keyof typeof RoomType;
type RoomTypeLabelKey = keyof typeof RoomTypeLabel;

export const getLabelByOfferType = (type: OfferType): string => {
  const keys = Object.keys(RoomType);
  const key = keys.find((item) =>
    (RoomType[item as RoomTypeKey] === type));

  return RoomTypeLabel[key as RoomTypeLabelKey];
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};
