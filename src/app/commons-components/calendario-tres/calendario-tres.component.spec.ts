import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioTresComponent } from './calendario-tres.component';

describe('CalendarioTresComponent', () => {
  let component: CalendarioTresComponent;
  let fixture: ComponentFixture<CalendarioTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
