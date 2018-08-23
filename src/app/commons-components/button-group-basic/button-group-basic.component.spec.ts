import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupBasic } from './button-group-basic.component';

describe('ButtonGroupBasic', () => {
  let component: ButtonGroupBasic;
  let fixture: ComponentFixture<ButtonGroupBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGroupBasic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
