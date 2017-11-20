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


import { AgmCoreModule } from '@agm/core';
import { CartComponent } from './cart/cart.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { PersonalDetailsComponent } from './cart/personal-details/personal-details.component';
import { PaymentDetailsComponent } from './cart/payment-details/payment-details.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { OrderService } from 'app/order.service';
import { DescriptionSectionComponent } from './smoothies/smoothie-details/description-section/description-section.component';
import { AddToBasketComponent } from './smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from 'app/user.service';
import { DetailsService } from 'app/details.service';
import { CommentService } from 'app/smoothies/smoothie-details/comments/comment.service';
import { CartService } from 'app/cart/cart-service';

import { CommentsComponent } from './smoothies/smoothie-details/comments/comments.component';
import { CommentComponent } from './smoothies/smoothie-details/comments/comment/comment.component';
import { AddCommentComponent } from './smoothies/smoothie-details/comments/add-comment/add-comment.component';



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
    PaymentDetailsComponent,
    CommentsComponent,
    CommentComponent,
    AddCommentComponent,
    DescriptionSectionComponent,
    AddToBasketComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      //{path: '', redirectTo: 'Home'},
      {path: 'home', component: HomeComponent},
      {path: 'smoothies', component: SmoothiesComponent},
      {path: './app/smoothies', component: SmoothiesComponent},
      {path: 'smoothies/details/:id', component: SmoothieDetailsComponent},
      {path: 'shop', component: CartComponent},
      {path: 'contact', component: ContactComponent},
      //{path: 'admin', component:admin}
    ]),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [OrderService, UserService, DetailsService, CommentService, CartService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
