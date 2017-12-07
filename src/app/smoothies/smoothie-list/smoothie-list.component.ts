import { Component, OnInit } from '@angular/core';
import { SmoothieService } from 'app/providers/smoothie.service';
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
  smoothies: ISmoothie[];
  smoothie: any;
  filteredSmoothies: ISmoothie[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSmoothies = this.listFilter ? this.performFilter(this.listFilter) : this.smoothie;
  }

  getAllSmoothies() {
    this._smoothieService.getData().subscribe(smoothies => {
      this.smoothie = smoothies;
      this.filteredSmoothies = this.smoothie;
        });
  }

  constructor(private _smoothieService: SmoothieService) {
  }

  performFilter(filterBy: string): ISmoothie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.smoothie.filter((smoothie: ISmoothie) => smoothie.name.toLocaleLowerCase().indexOf(filterBy) != -1 || smoothie.description.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

  ngOnInit() {
    this.getAllSmoothies();
  }
}
