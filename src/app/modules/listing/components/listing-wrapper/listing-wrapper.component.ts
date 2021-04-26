import {Component, OnInit} from '@angular/core';
import {ListingService} from '../../listing.service';
import {NotificationService} from '../../../../shared/notification.service';
import {Listing} from '../../models/listing.model';
import {SimpleMap} from '../../../../common/simple-map.model';
import {InputMode} from '../../../../common/input-mode.model';
import {ShowPipePipe} from '../../../../shared/show-pipe.pipe';

@Component({
  selector: 'app-listing-wrapper',
  templateUrl: './listing-wrapper.component.html',
  styleUrls: ['./listing-wrapper.component.less']
})
export class ListingWrapperComponent implements OnInit {

  public _createListing: boolean;
  public _showDetails: boolean;
  public _listing: Listing;
  public _detailsNeeded: SimpleMap<any>;
  public _mode: InputMode;


  constructor(private listingService: ListingService,
              private notificationService: NotificationService,
              private showPipe: ShowPipePipe) {
  }

  ngOnInit(): void {
    this.getAllListing();
  }

  _addListing(): void {
    this._mode = 'ADD';
    this._createListing = true;
  }

  _deleteListing(id: number): void {
    this.listingService.deleteListing(id.toString()).subscribe(() => {
      this.getAllListing();
      this.notificationService.displayNotification('Selected Listing has been successfully removed ');

    });
  }

  _editListing(listing: Listing): void {
    this._mode = 'EDIT';
    this._createListing = true;
    this._listing = listing;

  }

  private getAllListing(): void {
    this.listingService.getAllListing();
  }

  _showMoreDetails(data: Listing): void {
    const details = {};
    const keys = Object.keys(data);
    for (let key of keys) {
      if (key === 'realEstateType') {
        details[key] = {
          value: data[key] ? this.showPipe.transform(data[key]) : data[key],
          type: 'DATA'
        };
      } else if (key === 'imageURL') {
        details[key] = {value: data[key], type: 'IMAGE'};
      } else {
        details[key] = {value: data[key], type: 'DATA'};
      }
    }
    this._detailsNeeded = details;
    this._showDetails = true;
  }


}
