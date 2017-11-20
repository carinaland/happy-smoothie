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

    if (this.cookieService.check('selectedSmoothies')) {
      this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
    }
<<<<<<< HEAD
    //this.selectedSmoothies.push(this.smoothie.idSmoothie);
   
    this.selectedSmoothies.push({"id": "1", "quantity": "1"});
=======

    this.selectedSmoothies.push({"id": "4", "quantity": "1"});

>>>>>>> 809ad879cc2c7d7eed25fa61fe8af581914fac6e
    this.cookieService.set( 'selectedSmoothies', JSON.stringify(this.selectedSmoothies) );
    console.log(this.selectedSmoothies);


   
  }

}
