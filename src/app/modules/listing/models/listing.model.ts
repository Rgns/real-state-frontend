import {RealStateType} from './real-state-type.enum';

export class Listing {
  listingId: number;
  realEstateType: RealStateType;
  street: string;
  houseNumber: string;
  postcode: number;
  city: string;
  livingArea: string;
  siteArea: string;
  rentalPrice: number;
  salesPrice: number;
  imageURL: string;
}
