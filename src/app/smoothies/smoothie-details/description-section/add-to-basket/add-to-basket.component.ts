import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ISelectedSmoothie } from 'app/cart/cart-details/selectedSmoothie';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.css']
})
export class AddToBasketComponent implements OnInit {
  @Input() smoothie;

  public selectedSmoothies = [];
  //selectedSmoothies: ISelectedSmoothie[];
  constructor(private cookieService: CookieService) { }

  ngOnInit() {

  }

  addToBasket(){
    console.log(this.smoothie);
    if (this.cookieService.check('selectedSmoothies')) {
      this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
    }

    //this.cookieService.deleteAll();
   
    this.selectedSmoothies.push({"id": this.smoothie.idSmoothie, "quantity": "1"});
    this.cookieService.set( 'selectedSmoothies', JSON.stringify(this.selectedSmoothies) );
    console.log("add to cart" + this.selectedSmoothies);
   
  }

}
