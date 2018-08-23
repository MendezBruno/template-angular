import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnesLaColoradaComponent } from './carnes-la-colorada.component';

describe('CarnesLaColoradaComponent', () => {
  let component: CarnesLaColoradaComponent;
  let fixture: ComponentFixture<CarnesLaColoradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnesLaColoradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnesLaColoradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
