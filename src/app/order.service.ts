import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
  private apiUrl = "http://localhost:3100/api/Order/add";
  constructor(private http : Http) { }

 /* addOrder(order) {
    console.log('service order');
    return this.http.post(this.apiUrl, {order})
      .map((res) => res.json())
  }*/
 
 
 addOrder(order){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  var data = JSON.stringify(order);
  console.log(data);

  return this.http.post(this.apiUrl, data, {headers: headers})
      .map(res => res.json());
}

}
