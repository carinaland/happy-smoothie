import { Injectable } from '@angular/core';
var api = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=';
import {Http, Jsonp} from '@angular/http'

@Injectable()
export class TropicalFruitsService {

  details: any;

  health: string;

  constructor(private http:Http, private jsonp: Jsonp) { }


  getDetails(ingrediant) {

    let apiUrl = 'http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=';
      let pine = this.http.get(apiUrl + ingrediant)
          .map(res => {
              this.health = res.json().results[0].health;
              return res.json().results.map(item => {
                  this.details = item;
              });
          });
      return pine;
  }

    agetDetails(ingrediant) {

        const queryParam = "&callback=JSONP_CALLBACK";
        let apiUrl = 'http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=';
        console.log('lalala');
        let health : string;
        let promise = this.jsonp.get(apiUrl + ingrediant + queryParam)
            .map((response: any) => {
                    response.json();
                    console.log(response.results[0].health);
                    health = response.results[0].health;
            }
            ).toPromise();
        return health;
    }


}

