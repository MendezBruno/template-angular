import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carruselv2Component } from './carruselv2.component';

describe('Carruselv2Component', () => {
  let component: Carruselv2Component;
  let fixture: ComponentFixture<Carruselv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carruselv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carruselv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
