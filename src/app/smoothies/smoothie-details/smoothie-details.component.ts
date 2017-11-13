import { Component, OnInit } from '@angular/core';
import { DetailsService } from "../../details.service";

@Component({
  selector: 'app-smoothie-details',
  templateUrl: 'smoothie-details.component.html',
  styleUrls: ['smoothie-details.component.css']
})
export class SmoothieDetailsComponent implements OnInit {

  product: any [];

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.getSmoothie(2).subscribe(product => {
      this.product = product[0];
      console.log(this.product);
    });
  }



}
