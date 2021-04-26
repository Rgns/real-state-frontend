import {RealStateType} from './real-state-type.enum';

export class FilterSearch {
  public realEstateType: RealStateType;
  public rentalPrice: string;
  public salesPrice: string;
}

export class FilterRange {
  public min: number;
  public max: number;
}
