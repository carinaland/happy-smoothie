import { Component, OnInit } from '@angular/core';
import { ISmoothie } from 'app/smoothies/smoothie-list/smoothies';
import { Http, RequestMethod, Headers } from "@angular/http";
import { OrderService } from 'app/order.service';
import { OrdersmoothieService } from './ordersmoothie.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public selectedSmoothies = [];
  smoothies: ISmoothie[];
  showAdd: boolean = false;
  lastOrderId = [];
  OrderID: any;
  OrderIDArray = [];
  lastlastOderID: any;
  addOrderVar: any;
  objSmoothie: any;
  objSmoothieArray = [];
  public userID = [];

  constructor(private orderService: OrderService, private ordersmoothieService: OrdersmoothieService, private cookieService: CookieService) { }

  ngOnInit() {
    //this.userID = JSON.parse(this.cookieService.get('userID'));
  }

  showAddress() {
    this.showAdd = true;
  }

  

  addOrder() {
    //insert order into order table
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

  getLastOrderId() {
    //getting the last orderID
    console.log("get last order");
    this.orderService.getLastOrderID().subscribe((returedOrderID) => {
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
    })
  }

  addSmoothieOrder() {
    //getting smoothieID and quantity from cookie
    this.selectedSmoothies = JSON.parse(this.cookieService.get('selectedSmoothies'));
    console.log("selectedSmoothies" + this.selectedSmoothies);
    for (var i = 0; i < this.selectedSmoothies.length; i++) {
      this.objSmoothie = this.selectedSmoothies[i];
      this.objSmoothieArray.push(this.objSmoothie);
    }
    //insert smoothieID and quantity into smoothieOrders table with the last orderID
    for (var i = 0; i < this.objSmoothieArray.length; i++) {
      console.log("check addSmoothieOrder");
      var smoothieorder = {
        "idSmoothie": this.objSmoothieArray[i].id,
        "idOrder": this.lastlastOderID,
        "quantity": this.objSmoothieArray[i].quantity
      }
      this.ordersmoothieService.addSmoothieOrder(smoothieorder).subscribe(res => {
        var res = res;
        console.log("check addSmoothieOrder");
      });
    }
  }


  addTotalOrder() {
    this.addOrder();

    setTimeout(() => {
      this.getLastOrderId();
    }, 3000);

    setTimeout(() => {
      this.addSmoothieOrder();
    }, 5000);

  }

}
