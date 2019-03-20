import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormOneComponent } from './registration-form-one.component';

describe('RegistrationFormOneComponent', () => {
  let component: RegistrationFormOneComponent;
  let fixture: ComponentFixture<RegistrationFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
