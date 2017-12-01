import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { SmoothieService } from './admin/smoothie.service';
import { AddSmothieService } from './admin/add-smothie.service';

import { JsonpModule } from '@angular/http';

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

import { AdminComponent } from './admin/admin.component';
import { AddSmoothieComponent } from './admin/add-smoothie/add-smoothie.component';
import { SmoothieItemsComponent } from './admin/smoothie-items/smoothie-items.component';

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
import { TropicalFruitsService} from 'app/smoothies/smoothie-details/description-section/tropical-fruits.service';

import { CommentsComponent } from './smoothies/smoothie-details/comments/comments.component';
import { CommentComponent } from './smoothies/smoothie-details/comments/comment/comment.component';
import { AddCommentComponent } from './smoothies/smoothie-details/comments/add-comment/add-comment.component';

//firebase stuff
import { AngularFireModule} from 'angularfire2';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';
import { LoginComponent } from './admin/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

export const firebaseConfig = {
  apiKey: "AIzaSyDEqtsaNEzKQGOfcarbh38phCD7tDvjAcg",
  authDomain: "auth-project-1f851.firebaseapp.com",
  databaseURL: "https://auth-project-1f851.firebaseio.com",
  projectId: "auth-project-1f851",
  storageBucket: "",
  messagingSenderId: "686014718336"
  };

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

    AdminComponent,
    AddSmoothieComponent,
    SmoothieItemsComponent,

    CommentsComponent,
    CommentComponent,
    AddCommentComponent,
    DescriptionSectionComponent,
    AddToBasketComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent},
      {path: 'smoothies', component: SmoothiesComponent},
      {path: './app/smoothies', component: SmoothiesComponent},
      {path: 'smoothies/details/:id', component: SmoothieDetailsComponent},
      {path: 'shop', component: CartComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'admin', component:AdminComponent},
      {path: 'loginAdmin', component:LoginComponent}
    ]),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    JsonpModule
  ],
  providers: [
    AuthService, 
    AngularFireAuth,
    SmoothieService, 
    AddSmothieService, 
    OrderService, 
    UserService, 
    DetailsService, 
    CommentService, 
    CartService, 
    CookieService, 
    TropicalFruitsService, 
    JsonpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
