import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolResponsiveOneComponent } from './tool-responsive-one.component';

describe('ToolResponsiveOneComponent', () => {
  let component: ToolResponsiveOneComponent;
  let fixture: ComponentFixture<ToolResponsiveOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolResponsiveOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolResponsiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
