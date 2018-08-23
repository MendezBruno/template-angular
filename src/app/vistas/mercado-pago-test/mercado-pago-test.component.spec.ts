import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoPagoTestComponent } from './mercado-pago-test.component';

describe('MercadoPagoTestComponent', () => {
  let component: MercadoPagoTestComponent;
  let fixture: ComponentFixture<MercadoPagoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoPagoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoPagoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
