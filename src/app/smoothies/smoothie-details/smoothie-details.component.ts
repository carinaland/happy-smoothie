import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from "../../details.service";
import { ISmoothie } from "../smoothie-list/smoothies";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-smoothie-details',
  templateUrl: 'smoothie-details.component.html',
  styleUrls: ['smoothie-details.component.css']
})
export class SmoothieDetailsComponent implements OnInit {

  product: ISmoothie;

  passedId: number;

  constructor(private detailsService: DetailsService, private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    //get id from route
    this.activatedRoute.params.subscribe(params => {
      this.passedId = params['id'].slice(1);
    });

    this.detailsService.getSmoothie(this.passedId).subscribe(product => {
      this.product = product[0];
    });

  }

}
