import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBeveragesComponent } from './food-beverages.component';

describe('FoodBeveragesComponent', () => {
  let component: FoodBeveragesComponent;
  let fixture: ComponentFixture<FoodBeveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBeveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
