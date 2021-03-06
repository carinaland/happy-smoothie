import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

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
import { OrderService } from 'app/providers/order.service';
import { OrdersmoothieService } from 'app/providers/ordersmoothie.service';

import { DescriptionSectionComponent } from './smoothies/smoothie-details/description-section/description-section.component';
import { AddToBasketComponent } from './smoothies/smoothie-details/description-section/add-to-basket/add-to-basket.component';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from 'app/providers/user.service';
import { DetailsService } from 'app/providers/details.service';
import { CommentService } from 'app/smoothies/smoothie-details/comments/comment.service';
import { CartService } from 'app/providers/cart-service';
import { TropicalFruitsService} from 'app/smoothies/smoothie-details/description-section/tropical-fruits.service';
import { SmoothieService } from './providers/smoothie.service';

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


import { AuthGuard } from './providers/auth.guard';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthUserService } from './providers/auth-user.service';
import { NotificationService } from './providers/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

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
    NotificationComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,

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
      {path: 'loginAdmin', component:LoginComponent},
      {path: 'login', component:SigninComponent},
      {path: 'signup', component:SignupComponent},
    ]),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7_xl8mC74sHupd-EeGB2jthb4spdGcmo'
    }),
    JsonpModule
  ],
  providers: [
    AuthUserService, 
    NotificationService,
    AuthGuard,
    AuthService, 
    AngularFireAuth,
    SmoothieService, 
    OrderService, 
    OrdersmoothieService,
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
