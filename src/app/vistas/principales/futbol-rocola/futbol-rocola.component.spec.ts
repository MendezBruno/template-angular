import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolRocolaComponent } from './futbol-rocola.component';

describe('FutbolRocolaComponent', () => {
  let component: FutbolRocolaComponent;
  let fixture: ComponentFixture<FutbolRocolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutbolRocolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolRocolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
