import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var api = 'https://peaceful-reef-13737.herokuapp.com/api/';
import {Http, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import {Icomment} from "../../../Interfaces/Icomment";

@Injectable()
export class CommentService {


  constructor(private http:Http) { }

  /**
   * get all comments of one Smoothie
   * @param idSmoothie
   * @returns {Observable<R>}
   */
  getCommentsOfSmoothie(idSmoothie:number) : Observable<Icomment[]>  {
    console.log(idSmoothie);
    return this.http.get(api + 'Smoothie/' + idSmoothie + '/Comments')
        .map(res => res.json());
  }

  /**
   * get one single comment by Id
   * @param idComment
   * @returns {Observable<R>}
   */
  getComment(idComment:number) : Observable<Icomment> {
    return this.http.get(api + 'Comment/' + idComment)
        .map(res => res.json());
  }

  /**
   * add one comment to database
   * @param comment
   * @returns {OperatorFunction<T, R>}
   */
  addComment(comment) : Observable<Icomment> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var data = JSON.stringify(comment);

    return this.http.post(api + 'Comment/add', data, {headers: headers})
        .map(res => res.json());
  }

}
