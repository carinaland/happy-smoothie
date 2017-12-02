import { Component, OnInit, Input } from '@angular/core';

import { TropicalFruitsService } from "./tropical-fruits.service";
import { DetailsService } from "../../../details.service";

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit {
  @Input() smoothie;

  details: string;

  ingrediants: any;


  constructor(private fruitService: TropicalFruitsService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.getIngrediants(this.smoothie.idSmoothie);
  }

  getIngrediants(id){
    this.detailsService.getIngrediants(id).subscribe(ingrediants => {
      this.ingrediants = ingrediants;
    });
  }

  showIngrediantDetails(name){
    this.fruitService.getDetails(name).subscribe(details => {
      this.details = this.fruitService.details.health;
    });
  }

  /*showIngrediantDetails(){
    this.details = this.fruitService.getDetails('pineapple');
  }*/



}
