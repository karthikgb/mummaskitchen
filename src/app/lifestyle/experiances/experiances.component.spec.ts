import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiancesComponent } from './experiances.component';

describe('ExperiancesComponent', () => {
  let component: ExperiancesComponent;
  let fixture: ComponentFixture<ExperiancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
