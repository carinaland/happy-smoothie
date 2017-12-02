import { Component, OnInit } from '@angular/core';
import { SmoothieService } from '../../admin/smoothie.service';
import { Http, Response } from '@angular/http';
import { ISmoothie } from 'app/smoothielist';

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
  showAdd:boolean = false;
  Data: ISmoothie;
  smoothie: ISmoothie[];

  constructor(private _smoothieService: SmoothieService){
   }  

  getDatabaseData() {
    this._smoothieService.getData().subscribe(
      data => this.Data = data);
  }

  updateSmoothie(editimage: HTMLInputElement,editname: HTMLInputElement, editPrice: HTMLInputElement, editIngre: HTMLInputElement, editDes: HTMLInputElement): boolean {
    console.log(` Image: ${editimage.value}, Name: ${editname.value} Price: ${editPrice.value} Ingredient: ${editIngre.value} Description: ${editDes.value} `);
    var smoothie = {
     // 'idSmoothie': this.idSmoothie,
       'name': editname.value,
       'price': editPrice.value,
       'description':editDes.value,
       'imageUrl': editimage.value
    };
    this._smoothieService.updateSmoothie(smoothie).subscribe(res => {
      var res = res;
      console.log(res);
    });
    return false;
  }

  /*
  RemoveSmoothie(i) {
    this.smoothie.splice(i, 1);
  }*/
  deleteSmoothie(i) {
    this._smoothieService.deleteSmoothie(i)
    console.log(i);
  //  this.smoothie.splice(index, 1);
   // this.Data.remove(this.Data.findIndex((message => message._id === val)));
   }
/*
  RemoveSmoothie(val) {
     this._smoothieService.delete({id: val})
    .then((data)=>{
         this.Data.remove(this.Data.findIndex((message => message._id === val)));
      });
    } */
  /*

  updateSmoothie() {
    this.smoothie.updateSmoothie(1, this.Data).subscribe(()=>{
      console.log(this.Data);
    })
  }; */

  /*
  getDatabaseData(){
    this._smoothieService.getData(1).subscribe(
      data => {
      this.Data = data[0];
      console.log(this.Data);
    }); 
  } */

  ngOnInit() {
    this.getDatabaseData();
  }

  showAddForm(){ 
    this.showAdd = true;
  }
  Close() {
    this.edit = false;
  }
}




