import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariodosComponent } from './calendariodos.component';

describe('CalendariodosComponent', () => {
  let component: CalendariodosComponent;
  let fixture: ComponentFixture<CalendariodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendariodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendariodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
