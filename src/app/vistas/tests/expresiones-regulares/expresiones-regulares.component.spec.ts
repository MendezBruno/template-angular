import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresionesRegularesComponent } from './expresiones-regulares.component';

describe('ExpresionesRegularesComponent', () => {
  let component: ExpresionesRegularesComponent;
  let fixture: ComponentFixture<ExpresionesRegularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpresionesRegularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresionesRegularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
