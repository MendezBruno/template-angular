import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterySizeComponent } from './battery-size.component';

describe('BatterySizeComponent', () => {
  let component: BatterySizeComponent;
  let fixture: ComponentFixture<BatterySizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterySizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
