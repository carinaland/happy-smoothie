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
  lastOrderId = [];
  OrderID: any;
  OrderIDArray = [];
  lastlastOderID: any;
  addOrderVar: any;

  constructor(private orderService: OrderService, private ordersmoothieService: OrdersmoothieService) { }

  ngOnInit() {

  }

  showAddress() {
    this.showAdd = true;
  }


  addOrder() {
    console.log("ok");
    var order = {
      "idUser": 2222,
      "date": new Date()
    }
    console.log("addOrder" + order);

    this.orderService.addOrder(order).subscribe(res => {
      var res = res;
      //this.addOrderVar = res;
      console.log("orderplaced");

    })
  }

  /*getLastOrderId() {
    console.log("get last order");
    this.orderService.getLastOrderID().then((returedOrderID) => {
      this.lastOrderId = returedOrderID;
      for (var i = 0; i < this.lastOrderId.length; i++) {
        this.OrderID = this.lastOrderId[i];
        console.log("OrderID" + this.OrderID);
        this.OrderIDArray.push(this.OrderID.idOrder)
        for (var i = 0; i < this.OrderIDArray.length; i++) {
          this.lastlastOderID = this.OrderIDArray[i];
          console.log("lastlastOderID" + this.lastlastOderID);
        }
      }
    }).then((res)=> this.addSmoothieOrder())
  }

  addSmoothieOrder() {
    console.log("check addSmoothieOrder");
    var smoothieorder = {
      "idSmoothie": 2222,
      "idOrder": this.lastlastOderID,
      "quantity": 2222
    }
    this.ordersmoothieService.addSmoothieOrder(smoothieorder).subscribe(res => {
      var res = res;
      console.log("check addSmoothieOrder");
    });
  }*/

  addTotalOrder() {
    this.addOrder();
    //this.getLastOrderId();
    /*setTimeout(function(){
      this.getLastOrderId.emit('lastOrderID', this.getLastOrderId());
    }, 5000);*/
    //this.addSmoothieOrder();
  }

}
