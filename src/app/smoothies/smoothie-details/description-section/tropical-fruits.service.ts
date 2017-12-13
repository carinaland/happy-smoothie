import { Injectable } from '@angular/core';
var api = 'https://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=';
import {Http, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TropicalFruitsService {


  health: string;

  constructor(private http:Http, private jsonp: Jsonp) { }


    /**
     * gets Details from external Api
     * @param ingrediant
     * @returns {OperatorFunction<T, R>}
     */
  getDetails(ingrediant):Observable<any[]> {
    let apiUrl = 'https://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=';
      let pine = this.http.get(apiUrl + ingrediant)
          .map(res => {
              this.health = res.json().results[0].health;
              return res.json().results.map(i => {});
          });
      console.log(typeof pine);
      return pine;
  }


}

