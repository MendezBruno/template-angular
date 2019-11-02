import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCuatroComponent } from './market-cuatro.component';

describe('MarketCuatroComponent', () => {
  let component: MarketCuatroComponent;
  let fixture: ComponentFixture<MarketCuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
