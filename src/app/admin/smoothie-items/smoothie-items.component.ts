import { Component, OnInit } from '@angular/core';
import { SmoothieService } from 'app/providers/smoothie.service';
import { ISmoothie } from 'app/smoothielist';
import { DetailsService } from "../../details.service";
import { Iingrediant } from "../../Interfaces/Iingrediant";

@Component({
  selector: 'app-smoothie-items',
  templateUrl: './smoothie-items.component.html',
  styleUrls: ['./smoothie-items.component.css']
})

export class SmoothieItemsComponent implements OnInit {
  imageWidth: number = 40;
  imageHeight: number = 40;
  imageMargin: number = 12;

  edit = false;
  showAdd: boolean = false;
  Data: ISmoothie;
  smoothie: ISmoothie[];
  ingrediants: Iingrediant;
  smoothies: any;
  groß = 'hallo';

  constructor(private _smoothieService: SmoothieService, private _detailsService: DetailsService) {
  }

  getDatabaseData() {
    this._smoothieService.getData().subscribe(smoothies => {
      this.smoothies = smoothies;
    });
  }

  updateSmoothie(editimage, editname, editPrice, editIngre, editDes) {
    console.log(` Image: ${editimage.value}, Name: ${editname.value} Price: ${editPrice.value} Ingredient: ${editIngre.value} Description: ${editDes.value} `);
    var smoothie = {
      // 'idSmoothie': this.idSmoothie,
      'name': editname.value,
      'price': editPrice.value,
      'description': editDes.value,
      'imageUrl': editimage.value
    };
    this._smoothieService.updateSmoothie(smoothie).subscribe(res => {
      var res = res;
      console.log(res);
    });
    return false;
  }

  deleteSmoothie(i) {
    this._smoothieService.deleteSmoothie(i)
    console.log(i);
  }


  ngOnInit() {
    this.getDatabaseData();
  }

  showAddForm() {
    this.showAdd = true;
  }
  Close() {
    this.edit = false;
  }
}




