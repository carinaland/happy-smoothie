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
  public oneSmoothie = [];

  constructor(private _smoothieService: SmoothieService, private _detailsService: DetailsService) {
  }

  getDatabaseData() {
    this._smoothieService.getData().subscribe(smoothies => {
      this.smoothies = smoothies;
    });
  }

  editSmoothie(i){
    this.oneSmoothie.push(this.smoothies[i]);
    this.edit = true;
  }

  updateSmoothie(idSmoothie, name, price , description, imageUrl,) {
    console.log(idSmoothie.value, imageUrl.value , name.value, price.value, description.value)
  var smoothie = {
     'idSmoothie': idSmoothie.value,
      'name': name.value,
      'price': price.value,
      'description': description.value,
      'imageUrl': imageUrl.value
    };
    this._smoothieService.updateSmoothie(smoothie).subscribe(res => {
      var res = res;
      console.log(res);
    });
    return false;
  }

  deleteSmoothie(i) {
    //this._smoothieService.deleteSmoothie(i);
    console.log(i);
    this._smoothieService.deleteSmoothie(i).subscribe(res => {
      var res = res;
      console.log(res);
    });

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




