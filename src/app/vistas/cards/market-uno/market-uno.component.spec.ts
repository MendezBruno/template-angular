import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketUnoComponent } from './market-uno.component';

describe('MarketUnoComponent', () => {
  let component: MarketUnoComponent;
  let fixture: ComponentFixture<MarketUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
