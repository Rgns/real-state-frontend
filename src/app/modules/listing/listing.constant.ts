import {DictionaryValue} from '../../common/dictionary-value.model';
import {SimpleMap} from '../../common/simple-map.model';

export class ListingConstant {


  static getRealStateTypes(): DictionaryValue[] {
    const keys = Object.keys(ListingConstant.stateEnums);
    return keys.map((key) => {
      return new DictionaryValue(key, ListingConstant.stateEnums[key]);
    });
  }

  static stateEnums: SimpleMap<string> = {
    '': '',
    'APARTMENT_RENT': 'Apartment Rent',
    'HOUSE_RENT': 'House Rent',

    'APARTMENT_BUY': 'Apartment Buy',
    'HOUSE_BUY': 'House Buy',
  };

}
