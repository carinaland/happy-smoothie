import { Injectable } from '@angular/core';
import { Http, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user';
import 'rxjs';

@Injectable()
export class UserService {
  private apiUrl = "http://localhost:3100/api/User";
  constructor(private http: Http) { }

  getUser(id: number): Observable<IUser> {
    return this.http.get(this.apiUrl + `/${id}`)
      .map((res) => res.json())
  }

  getUserID(email): Observable<IUser[]> {
    console.log("service email" + email)
    return this.http.get(this.apiUrl + '/GetId' + `/${email}`)
      .map((res) => res.json())
  }

  addUser(user){
    console.log(user)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = JSON.stringify(user);
    console.log(data);
    return this.http.post(this.apiUrl + '/Add', data, {headers: headers})
        .map(res => res.json());
  }

  updateUser(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = JSON.stringify(user);
    console.log("user service check name: " + user.name);
    console.log("user service check id: " + user.iduser);

    return this.http.put(this.apiUrl + '/Update/' + user.iduser, data, { headers: headers })
      .map(res => res.json());
  }

 /* updateUser(id : number, data) : Observable<IUser> {
    return this.http.put(this.apiUrl + `/Update` + `/${id}`, data)
      .map((res) => res.json())
  }*/


}