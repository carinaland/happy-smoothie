import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
  private apiUrl = "http://localhost:3100/api/";
  constructor(private http : Http) { }

 /* addOrder(order) {
    console.log('service order');
    return this.http.post(this.apiUrl, {order})
      .map((res) => res.json())
  }*/
  /*getLastOderId(): Observable<IUser> {
    return this.http.get(this.apiUrl + 'Order')
      .map((res) => res.json())
  }*/
 
 addOrder(order){
  console.log(order)
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  var data = JSON.stringify(order);
  console.log(data);
  return this.http.post(this.apiUrl + 'Order/add', data, {headers: headers})
      .map(res => res.json());
}

/*addSmoothieOrder(smoothieorder){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  var data = JSON.stringify(smoothieorder);
  console.log(data);
  return this.http.post(this.apiUrl + 'SmoothieOrder/add', data, {headers: headers})
      .map(res => res.json());
}*/

}
