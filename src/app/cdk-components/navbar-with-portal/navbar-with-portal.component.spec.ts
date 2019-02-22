import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWithPortalComponent } from './navbar-with-portal.component';

describe('NavbarWithPortalComponent', () => {
  let component: NavbarWithPortalComponent;
  let fixture: ComponentFixture<NavbarWithPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarWithPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWithPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
