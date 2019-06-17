import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatActionsButtonsComponent } from './float-actions-buttons.component';

describe('FloatActionsButtonsComponent', () => {
  let component: FloatActionsButtonsComponent;
  let fixture: ComponentFixture<FloatActionsButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatActionsButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatActionsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
