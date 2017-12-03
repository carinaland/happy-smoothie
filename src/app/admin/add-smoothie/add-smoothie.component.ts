import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService } from 'app/providers/smoothie.service';

@Component({
  selector: 'app-add-smoothie',
  templateUrl: './add-smoothie.component.html',
  styleUrls: ['./add-smoothie.component.css']
})
export class AddSmoothieComponent implements OnInit {
  showAdd:boolean = false;
  constructor(private _smoothieService : SmoothieService) { }
  
  ngOnInit() {
  }

  addSmoothie(image: HTMLInputElement,name: HTMLInputElement, price: HTMLInputElement, ingredients: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log(` Image: ${image.value}, Name: ${name.value} Price: ${price.value} Ingredient: ${ingredients.value} Description: ${description.value} `);
    var smoothie = {
       'name': name.value,
       'price': price.value,
      // 'ingredient': ingredients.value,
       'description':description.value,
       'imageUrl': image.value
    };
    this._smoothieService.addSmoothie(smoothie).subscribe(res => {
      var res = res;
      console.log(res);
    });
    return false;
  } 
}
