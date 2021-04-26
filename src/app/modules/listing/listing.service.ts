import {Inject, Injectable, Injector} from '@angular/core';
import {ApiService} from '../../common/api.service';
import {Observable} from 'rxjs';
import {Listing} from './models/listing.model';
import {FilterSearch} from './models/filter-search.model';

@Injectable()
export class ListingService extends ApiService {

  private getAllListingUrl = 'listings';
  private addListingUrl = 'listings';
  private updateListingUrl = 'listings/{listingId}';
  private deleteListingUrl = 'listings/{listingId}';

  public listings$: Observable<Listing[]>;
  public filter: FilterSearch;

  constructor(@Inject(Injector) protected injector: Injector) {
    super(injector);
  }

  public getAllListing(): Observable<Listing[]> {
    this.listings$ = this.resolveHttp('GET', this.getAllListingUrl, null, null, null, this.filter);
    return this.listings$;
  }

  public addListing(listing: Listing): Observable<Listing> {
    return this.resolveHttp('POST', this.addListingUrl, null, listing);
  }

  public updateListing(listing: Listing, id: string): Observable<Listing> {
    return this.resolveHttp('PUT', this.updateListingUrl, {listingId: id}, listing);
  }

  public deleteListing(id: string): Observable<void> {
    return this.resolveHttp('DELETE', this.deleteListingUrl, {listingId: id});
  }

}
