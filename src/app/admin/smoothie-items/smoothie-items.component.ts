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
  edit = false;
  showAdd:boolean = false;
  Data: ISmoothie;
  constructor(private _smoothieService: SmoothieService){
   }  

  getDatabaseData() {
    this._smoothieService.getData().subscribe(
      data => this.Data = data);
   
  }

  /*
  getDatabaseData(){
    this._smoothieService.getData(1).subscribe(
      data => {
      this.Data = data[0];
      console.log(this.Data);
    }); 
  } */


  ngOnInit() {
      
      this.getDatabaseData()
  }

  showAddForm(){ 
    this.showAdd = true;
  }
  Close() {
    this.edit = false;
  }
}




