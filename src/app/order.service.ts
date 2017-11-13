import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user';

@Injectable()
export class OrderService {
  private apiUrl = "http://localhost:3100/api/order";
  constructor(private http : Http) { }

  addOrder(Order) : Observable<IUser> {
    console.log('hjghjf');
    return this.http.post(this.apiUrl, {Order})
      .map((res) => res.json())
  }

}
