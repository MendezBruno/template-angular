import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTestComponent } from './cards-test.component';

describe('CardsTestComponent', () => {
  let component: CardsTestComponent;
  let fixture: ComponentFixture<CardsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
