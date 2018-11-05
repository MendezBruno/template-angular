import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplegableButtonComponent } from './desplegable-button.component';

describe('DesplegableButtonComponent', () => {
  let component: DesplegableButtonComponent;
  let fixture: ComponentFixture<DesplegableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesplegableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesplegableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
