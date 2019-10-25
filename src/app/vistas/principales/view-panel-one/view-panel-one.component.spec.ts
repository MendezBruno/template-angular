import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPanelOneComponent } from './view-panel-one.component';

describe('ViewPanelOneComponent', () => {
  let component: ViewPanelOneComponent;
  let fixture: ComponentFixture<ViewPanelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPanelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPanelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
