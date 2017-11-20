import { Component, OnInit } from '@angular/core';
import { ISmoothie } from 'app/smoothies/smoothie-list/smoothies';
import { Http, RequestMethod, Headers } from "@angular/http";
import { OrderService } from 'app/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  smoothies: ISmoothie[];
  showAdd: boolean = false;
  constructor(private orderService: OrderService) { }

  ngOnInit() {

  }

  showAddress() {
    this.showAdd = true;
  }


  addOrder(){
    console.log("ok");
    var order = { 
      "idUser": 520
    };

    console.log(order);

    this.orderService.addOrder(order).subscribe(res => {
      var res = res;
      console.log(res);
    });
  }
}
