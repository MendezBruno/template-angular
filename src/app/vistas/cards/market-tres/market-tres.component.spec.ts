import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTresComponent } from './market-tres.component';

describe('MarketTresComponent', () => {
  let component: MarketTresComponent;
  let fixture: ComponentFixture<MarketTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
