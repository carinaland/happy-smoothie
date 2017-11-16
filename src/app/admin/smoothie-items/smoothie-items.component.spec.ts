import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieItemsComponent } from './smoothie-items.component';

describe('SmoothieItemsComponent', () => {
  let component: SmoothieItemsComponent;
  let fixture: ComponentFixture<SmoothieItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothieItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothieItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
