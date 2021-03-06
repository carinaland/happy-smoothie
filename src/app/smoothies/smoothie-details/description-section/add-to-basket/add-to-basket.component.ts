import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ISelectedSmoothie } from 'app/interfaces/selectedSmoothie';
import { ISmoothie } from 'app/Interfaces/smoothielist';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.css']
})
export class AddToBasketComponent{
  @Input() smoothie:ISmoothie;

  public selectedSmoothies = [];
  //selectedSmoothies: ISelectedSmoothie[];
  constructor(private cookieService: CookieService) { }

  /**
   * add smoothie to cookie for read it in basket
   *
   * return: void
   */
  addToBasket():void{

    if (this.cookieService.check('userID')) {
      if (this.cookieService.check('selectedSmoothies')) {
        this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
      }

      this.selectedSmoothies.push({"id": this.smoothie.idSmoothie, "quantity": "1"});
      this.cookieService.set( 'selectedSmoothies', JSON.stringify(this.selectedSmoothies) );
      alert('Your smoothie was successfully added to the basket. Continue shopping or go to "Shop" for finishing your order.')
    } else {
      alert('you are not logged in. Please login before ordering.');
    }

   
  }

}
