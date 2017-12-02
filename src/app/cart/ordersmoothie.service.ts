import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user';
import 'rxjs/add/operator/map';

@Injectable()
export class OrdersmoothieService {
    private apiUrl = "http://localhost:3100/api/";
    constructor(private http: Http) { }

    addSmoothieOrder(smoothieorder) {
        console.log("check service");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(smoothieorder);
        console.log(data);
        return this.http.post(this.apiUrl + '/SmoothieOrders/add', data, { headers: headers })
            .map(res => res.json());
    }

}
