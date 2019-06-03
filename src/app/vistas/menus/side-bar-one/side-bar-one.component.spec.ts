import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOneComponent } from './side-bar-one.component';

describe('SideBarOneComponent', () => {
  let component: SideBarOneComponent;
  let fixture: ComponentFixture<SideBarOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
