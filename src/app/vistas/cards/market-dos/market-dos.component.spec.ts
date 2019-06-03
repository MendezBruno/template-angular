import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDosComponent } from './market-dos.component';

describe('MarketDosComponent', () => {
  let component: MarketDosComponent;
  let fixture: ComponentFixture<MarketDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
