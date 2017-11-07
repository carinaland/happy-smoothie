import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { SmoothieListComponent } from './smoothie-list/smoothie-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MapComponent } from './map/map.component';
import {RouterModule} from "@angular/router";

import { AgmCoreModule } from '@agm/core';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothiesComponent,
    SmoothieListComponent,
    StarRatingComponent,
    ContactComponent,
    ContactDetailsComponent,
    MapComponent,
    ShopComponent,
    CartComponent,
    CartDetailsComponent,
    PersonalDetailsComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'smoothies', component: SmoothiesComponent},
      {path: 'shop', component: ShopComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'admin'}, component:admin}
    ]),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
