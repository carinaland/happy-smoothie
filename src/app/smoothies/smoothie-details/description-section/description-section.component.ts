import { Component, OnInit, Input } from '@angular/core';

import { TropicalFruitsService } from "./tropical-fruits.service";

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit {
  @Input() smoothie;

  details: any;

  constructor(private fruitService: TropicalFruitsService) { }

  ngOnInit() {
  }

  showIngrediantDetails(){
    this.fruitService.getDetails('pineapple').subscribe(details => {
      this.details = details;
    });
  }

}
