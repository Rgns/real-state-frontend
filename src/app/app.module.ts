import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListingModule} from './modules/listing/listing.module';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListingModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
