import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolHoyComponent } from './futbol-hoy.component';

describe('FutbolHoyComponent', () => {
  let component: FutbolHoyComponent;
  let fixture: ComponentFixture<FutbolHoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutbolHoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
