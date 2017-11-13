import { Injectable } from '@angular/core';
import { Http, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user';
import 'rxjs';

@Injectable()
export class UserService {
  private apiUrl = "http://localhost:3100/api/user";
  constructor(private http : Http) { }

  getUser(id : number) : Observable<IUser> {
    return this.http.get(this.apiUrl + `/${id}`)
      .map((res) => res.json())
  }

  updateUser(id : number, user: IUser) : Observable<IUser> {
    return this.http.put(this.apiUrl + `/${id}`, user)
      .map((res) => res.json())
  }


}
