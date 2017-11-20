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
    //this.cookieService.deleteAll();
    if (this.cookieService.check('selectedSmoothies')) {
      this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
    }
    //this.selectedSmoothies.push(this.smoothie.idSmoothie);
   
    this.selectedSmoothies.push({"id": "1", "quantity": "1"});
    this.cookieService.set( 'selectedSmoothies', JSON.stringify(this.selectedSmoothies) );
    console.log(this.selectedSmoothies);


   
  }

}
