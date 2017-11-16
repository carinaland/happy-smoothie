import { Component, OnInit } from '@angular/core';
import { ISmoothie } from './smoothies';

@Component({
  selector: 'app-smoothie-list',
  templateUrl: 'smoothie-list.component.html',
  styleUrls: ['smoothie-list.component.css']
})
export class SmoothieListComponent {
imageWidth: number = 125;
imageHeight: number = 125;
imageMargin: number = 2;

_listFilter: string ;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredSmoothies = this.listFilter ? this.performFilter(this.listFilter):this.smoothies;
  }


filteredSmoothies: ISmoothie[];
smoothies: ISmoothie[] = [
  {
    "productId" : 1,
    "name": "Fruity Flamingo",
    "description": "A mix of Strawberries and Blueberries for our fruity lovers",
    "price": 3.29,
    "rating":4.6,
    "imageUrl": "https://i.imgur.com/1FSTFc6.jpg?1"
  },
  {
    "productId" : 2,
    "name": "Bitter Berries",
    "description": "Are you a Bitter Betty? then this is the flavour for you!",
    "price": 2.79,
    "rating":3.5,
    "imageUrl": "https://i.imgur.com/lJI3zgI.jpg"
  }
]

constructor() {
this.filteredSmoothies = this.smoothies
}

performFilter(filterBy:string):ISmoothie[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.smoothies.filter((smoothie: ISmoothie) => smoothie.name.toLocaleLowerCase().indexOf(filterBy) != -1);
}
}
