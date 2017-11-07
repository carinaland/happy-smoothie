import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 54.27775144695452;
  lng: number =  -8.459063946129238;
  zoom: number= 16;
  constructor() { }

  ngOnInit() {
  }

}
