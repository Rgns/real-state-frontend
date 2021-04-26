import {Pipe, PipeTransform} from '@angular/core';
import {ListingConstant} from '../modules/listing/listing.constant';

@Pipe({
  name: 'showPipe',
})
export class ShowPipePipe implements PipeTransform {

  transform(value: string): unknown {
    return value ? ListingConstant.stateEnums[value] : value;
  }

}
