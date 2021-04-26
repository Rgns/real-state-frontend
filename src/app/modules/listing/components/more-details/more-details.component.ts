import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SimpleMap} from '../../../../common/simple-map.model';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.less']
})
export class MoreDetailsComponent {

  @Input()
  open: boolean;

  @Input()
  set details(data: SimpleMap<any>) {
    if (data) {
      this._keys = Object.keys(data);
      this._details = data;
    }
  }

  @Output()
  openChange = new EventEmitter<boolean>();

  public _details: SimpleMap<any>;
  public _keys: string[];

}
