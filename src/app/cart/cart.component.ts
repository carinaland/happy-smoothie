import { Component, OnInit } from '@angular/core';
import { ISmoothie } from 'app/smoothies/smoothie-list/smoothies';
import { Http, RequestMethod, Headers } from "@angular/http";
import { OrderService } from 'app/order.service';
import { OrdersmoothieService } from './ordersmoothie.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  smoothies: ISmoothie[];
  showAdd: boolean = false;
  lastOrderId: number;
  constructor(private orderService: OrderService, private ordersmoothieService: OrdersmoothieService) { }

  ngOnInit() {

  }

  showAddress() {
    this.showAdd = true;
  }


  addOrder() {
    console.log("ok");
    var order = {
      "idUser": 5000,
      "date": new Date()
    }
    console.log(order);

    this.orderService.addOrder(order).subscribe(res => {
      var res = res;
      console.log(res);
    });
  }

  getLastOrderId() {
    this.lastOrderId
  };

  addSmoothieOrder() {
    console.log("check addSmoothieOrder");
    var smoothieorder = {
      "idSmoothie": 100,
      "quantity": 200
    }
    this.ordersmoothieService.addSmoothieOrder(smoothieorder).subscribe(res => {
      var res = res;
      console.log("check addSmoothieOrder 2");
    });
  }


  /*addTotalOrder(){
    this.addOrder();
    this.addSmoothieOrder();
  }*/

}
