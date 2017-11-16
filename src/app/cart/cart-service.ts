import { Injectable } from '@angular/core';
import { Http, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ICart } from 'app/cart/cart';

@Injectable()
export class CartService {

private apiUrl = "http://localhost:3100/api/Cart";
constructor(private http : Http) { }

/*getCart(id : number) : Observable<ICart> {
  return this.http.get(this.apiUrl + `/${id}`)
    .map((res) => res.json())
}*/
getCart(id : any) : Observable<ICart[]> {
    return this.http.get(this.apiUrl + `/${id}`)
      .map((res) => res.json())
  }
}