import { Component, OnInit } from '@angular/core';
import { SmoothieService } from '../../admin/smoothie.service';
import { AddSmothieService  } from '../../admin/add-smothie.service';

@Component({
  selector: 'app-add-smoothie',
  templateUrl: './add-smoothie.component.html',
  styleUrls: ['./add-smoothie.component.css']
})
export class AddSmoothieComponent implements OnInit {
  showAdd:boolean = false;
  constructor(private addsmoothieService : AddSmothieService) { }
  
  ngOnInit() {
  }
//newimage,newname, newprice, newingredients, newdescription
  
  AddSmoothie(){
    var smoothie = {
    //  'idSmoothie': this.idSmoothie,
    //  'name': this.newname,
    'idSmoothie':4,
    'name':'apple',
      'price': 3};

    this.addsmoothieService.addSmoothie(smoothie).subscribe(res => {
      var res = res;
      console.log(res);
    });
  }


/*
  addSmoothie(): void {
    console.log("ok");
   var Smooth = {smoothieid:"4", name:"dsd"};
   console.log(SmoothieService);
    this.smoothieService.addSmoothie(Smooth).subscribe(() =>
       console.log(Smooth))
    }; 
*/
  
}

/*
  //add button
  addSmoothie(name: HTMLInputElement, price: HTMLInputElement, ingredients: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log(` Name: ${name.value} Price: ${price.value} Ingredienst: ${ingredients.value} Description: ${description.value} `);
    this.smoothies.push(new Smoothie(name.value, price.value, ingredients.value, description.value));
    name.value = '';
    price.value = '';
    ingredients.value = '';
    description.value = '';
    return false;
  }

  */