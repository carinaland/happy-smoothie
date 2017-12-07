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


  /*
  getLastSmoothID() {
    //getting the last orderID
    console.log("get last order");
    this._smoothieService.getLastSmoothID().subscribe((returedSmoothieID) => {
      this.lastOrderId = returedSmoothieID;
      for (var i = 0; i < this.lastOrderId.length; i++) {
        this.OrderID = this.lastOrderId[i];
        console.log("OrderID" + this.OrderID);
        this.OrderIDArray.push(this.OrderID.idOrder)
        for (var i = 0; i < this.OrderIDArray.length; i++) {
          this.lastlastOderID = this.OrderIDArray[i];
          console.log("lastlastOderID" + this.lastlastOderID);
        }
      }
    })
  } 
   */
}
