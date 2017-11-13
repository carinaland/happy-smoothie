import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { SmoothieListComponent } from './smoothies/smoothie-list/smoothie-list.component';
import { SmoothieDetailsComponent } from './smoothies/smoothie-details/smoothie-details.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { ContactComponent } from './contact/contact.component';
 import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
 import { MapComponent } from './contact/map/map.component';
import {RouterModule} from "@angular/router";

import { AgmCoreModule } from '@agm/core';
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { PersonalDetailsComponent } from './cart/personal-details/personal-details.component';
import { PaymentDetailsComponent } from './cart/payment-details/payment-details.component';
import { UserService } from 'app/user.service';
import { OrderService } from 'app/order.service';

@NgModule({
  declarations: [
    AppComponent,
    SmoothiesComponent,
    SmoothieListComponent,
    StarRatingComponent,
    ContactComponent,
    ContactDetailsComponent,
    MapComponent,
    SmoothieDetailsComponent,
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
      {path: 'smoothies/details/:id', component: SmoothieDetailsComponent},
      {path: 'shop', component: CartComponent},
      {path: 'contact', component: ContactComponent},
      //{path: 'admin', component:admin}
    ]),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [OrderService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
