import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from "../../details.service";
import { ISmoothie } from "../smoothie-list/smoothies";

@Component({
  selector: 'app-smoothie-details',
  templateUrl: 'smoothie-details.component.html',
  styleUrls: ['smoothie-details.component.css']
})
export class SmoothieDetailsComponent implements OnInit {
  product: ISmoothie;

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.getSmoothie(2).subscribe(product => {
      this.product = product[0];
      console.log(this.product);
    });
  }



}
