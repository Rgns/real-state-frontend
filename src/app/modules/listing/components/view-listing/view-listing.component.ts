import {Component, EventEmitter, Output} from '@angular/core';
import {ListingService} from '../../listing.service';
import {Listing} from '../../models/listing.model';
import {DictionaryValue} from '../../../../common/dictionary-value.model';
import {ListingConstant} from '../../listing.constant';
import {FilterRange, FilterSearch} from '../../models/filter-search.model';
import {RealStateType} from '../../models/real-state-type.enum';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.less']
})
export class ViewListingComponent {

  @Output()
  deleteListing = new EventEmitter<number>();

  @Output()
  editListing = new EventEmitter<Listing>();

  @Output()
  showDetails = new EventEmitter<Listing>();

  public realEstateTypeFilter: RealStateType;
  public minRentalPriceFilter: number;
  public maxRentalPriceFilter: number;
  public minSalesPriceFilter: number;
  public maxSalesPriceFilter: number;

  public _realStateType: DictionaryValue[] = ListingConstant.getRealStateTypes();

  constructor(public listingService: ListingService) {
  }

  /*

    ngAfterContentInit(): void {
      var input = document.querySelector('input');
      var observable = Rx.Observable.fromEvent(input, 'input');

      observable
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe({
          next: function(event) {
            console.log(event.target.value);
          }
        });
    }
  */

  _filterChange(): void {
    this.listingService.filter = new FilterSearch();

    if (this.realEstateTypeFilter) {
      this.listingService.filter.realEstateType = this.realEstateTypeFilter;
    } else {
      delete this.listingService.filter['realEstateType'];
    }

    const rentalPriceFilter: FilterRange = new FilterRange();
    // {"min":"1000","max":"1200"}
    if (this.minRentalPriceFilter) {
      rentalPriceFilter.min = this.minRentalPriceFilter;
    }
    if (this.maxRentalPriceFilter) {
      rentalPriceFilter.max = this.maxRentalPriceFilter;
    }
    if (Object.keys(rentalPriceFilter).length) {
      this.listingService.filter.rentalPrice = (JSON.stringify(rentalPriceFilter));
    } else {
      delete this.listingService.filter['rentalPrice'];
    }

    const salesPriceFilter: FilterRange = new FilterRange();
    // {"min":"1000","max":"1200"}
    if (this.minSalesPriceFilter) {
      salesPriceFilter.min = this.minSalesPriceFilter;
    }
    if (this.maxSalesPriceFilter) {
      salesPriceFilter.max = this.maxSalesPriceFilter;
    }
    if (Object.keys(salesPriceFilter).length) {
      this.listingService.filter.salesPrice = (JSON.stringify(salesPriceFilter));
    } else {
      delete this.listingService.filter['salesPrice'];
    }

    this.listingService.getAllListing();
  }


}
