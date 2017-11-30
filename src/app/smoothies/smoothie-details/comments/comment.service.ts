import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var api = 'http://localhost:3100/api/';
import {Http, Headers, RequestOptions} from '@angular/http'

@Injectable()
export class CommentService {

  constructor(private http:Http) { }

  /**
   * get all comments of one Smoothie
   * @param idSmoothie
   * @returns {Observable<R>}
   */
  getCommentsOfSmoothie(idSmoothie) {
    return this.http.get(api + 'Smoothie/' + idSmoothie + '/Comments')
        .map(res => res.json());
  }

  /**
   * get one single comment by Id
   * @param idComment
   * @returns {Observable<R>}
   */
  getComment(idComment) {
    return this.http.get(api + 'Comment/' + idComment)
        .map(res => res.json());
  }

  addComment(comment){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var data = JSON.stringify(comment);
    console.log(data);

    return this.http.post(api + '/Comment/add', data, {headers: headers})
        .map(res => res.json());
  }

}
