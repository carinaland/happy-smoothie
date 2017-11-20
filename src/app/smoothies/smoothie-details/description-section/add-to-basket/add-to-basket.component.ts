import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-to-basket',
  templateUrl: './add-to-basket.component.html',
  styleUrls: ['./add-to-basket.component.css']
})
export class AddToBasketComponent implements OnInit {
  @Input() smoothie;

  public selectedSmoothies = [];

  constructor(private cookieService: CookieService) { }

  ngOnInit() {

  }

  addToBasket(){

    if (this.cookieService.check('selectedSmoothies')) {
      this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
    }

    this.selectedSmoothies.push({"id": "4", "quantity": "1"});

    this.cookieService.set( 'selectedSmoothies', JSON.stringify(this.selectedSmoothies) );
    console.log(this.selectedSmoothies);


  }

}
