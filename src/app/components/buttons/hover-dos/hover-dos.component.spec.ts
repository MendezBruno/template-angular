import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverDosComponent } from './hover-dos.component';

describe('HoverDosComponent', () => {
  let component: HoverDosComponent;
  let fixture: ComponentFixture<HoverDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
