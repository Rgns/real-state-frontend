import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListingService} from '../../listing.service';
import {Listing} from '../../models/listing.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DictionaryValue} from '../../../../common/dictionary-value.model';
import {ListingConstant} from '../../listing.constant';
import {NotificationService} from '../../../../shared/notification.service';
import {InputMode} from '../../../../common/input-mode.model';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.less']
})
export class CreateListingComponent implements OnInit {

  @Input()
  open: boolean;

  @Input()
  mode: InputMode = 'ADD';

  @Input()
  set listing(data: Listing) {
    if (data) {
      this.createForm();
      this._listing = data;
    }
  }

  @Output()
  openChange = new EventEmitter<boolean>();

  public _listing: Listing = new Listing();
  public _addForm: FormGroup;
  public _realStateType: DictionaryValue[];


  constructor(private listingService: ListingService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this._realStateType = ListingConstant.getRealStateTypes();
    this.createForm();
  }

  private createForm(): void {
    this._addForm = new FormGroup({
      city: new FormControl(this._listing?.city, Validators.required),
      realEstateType: new FormControl(this._listing?.realEstateType, Validators.required),
      street: new FormControl(this._listing?.street, Validators.required),
      houseNumber: new FormControl(this._listing?.houseNumber, Validators.required),
      livingArea: new FormControl(this._listing?.livingArea, Validators.required),
      siteArea: new FormControl(this._listing?.siteArea),
      postcode: new FormControl(this._listing?.postcode, Validators.required),
      rentalPrice: new FormControl(this._listing?.rentalPrice),
      salesPrice: new FormControl(this._listing?.salesPrice),
      imageURL: new FormControl(this._listing?.imageURL),
    });
  }

  _addListing(): void {
    if (this.mode === 'EDIT') {
      this.listingService.updateListing(this._listing, this._listing.listingId.toString()).subscribe((data) => {
        this.updateView();
        this.notificationService.displayNotification('Listing Information has been Updated Successfully!');
      });
    } else {
      this.listingService.addListing(this._listing).subscribe((data: Listing) => {
        this.updateView();
        this.notificationService.displayNotification('Listing Information has been Added Successfully!');
      });
    }

  }

  private updateView(): void {
    this.listingService.getAllListing();
    this.open = false;
    this.openChange.emit(false);
  }

  _closePopup(): void {
    this.openChange.emit(false);
  }
}
