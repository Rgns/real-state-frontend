import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateListingComponent} from './components/create-listing/create-listing.component';
import {ViewListingComponent} from './components/view-listing/view-listing.component';
import {ListingService} from './listing.service';
import {SharedModule} from '../../shared/shared.module';
import {ListingWrapperComponent} from './components/listing-wrapper/listing-wrapper.component';
import {ComponentsModule} from '../../components/components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MoreDetailsComponent} from './components/more-details/more-details.component';
import {ShowPipePipe} from '../../shared/show-pipe.pipe';


@NgModule({
  declarations: [
    CreateListingComponent,
    ViewListingComponent,
    ListingWrapperComponent,
    MoreDetailsComponent
  ],
  exports: [
    ViewListingComponent,
    ListingWrapperComponent,
    CreateListingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ListingService,
    ShowPipePipe]
})
export class ListingModule {
}
