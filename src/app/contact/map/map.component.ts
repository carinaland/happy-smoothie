import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 54.277751;
  lng: number =  -8.459063;
  lat1: number = 54.278573;
  lng1: number =  -8.4643905;
  zoom: number= 16;
  constructor() { }

  ngOnInit() {
  }

}
