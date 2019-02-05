import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerTestComponent } from './spinner-test.component';

describe('SpinnerTestComponent', () => {
  let component: SpinnerTestComponent;
  let fixture: ComponentFixture<SpinnerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
