import { Component, OnInit, Input } from '@angular/core';

import { TropicalFruitsService } from "./tropical-fruits.service";
import { DetailsService } from "app/providers/details.service";
import { Iingrediant } from "../../../Interfaces/Iingrediant";
import { ISmoothie } from 'app/Interfaces/smoothielist';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit {
  @Input() smoothie:ISmoothie;

  details: string;

  ingrediants: Iingrediant[];


  constructor(private fruitService: TropicalFruitsService, private detailsService: DetailsService) { }

  ngOnInit():void {
    console.log(this.smoothie);
    this.getIngrediants(this.smoothie.idSmoothie);
  }

  /**
   * gets all Ingrediants
   * @param id
   */
  getIngrediants(id:number):void{
    console.log(id);
    this.detailsService.getIngrediants(id).subscribe(ingrediants => {
      this.ingrediants = ingrediants;
      console.log(this.ingrediants);
    });
  }

  /**
   * gets Ingrediant details from external api
   * @param name
   */
  showIngrediantDetails(name:string):void{
    this.fruitService.getDetails(name).subscribe(details => {
      this.details = this.fruitService.health;
    });
  }

}
