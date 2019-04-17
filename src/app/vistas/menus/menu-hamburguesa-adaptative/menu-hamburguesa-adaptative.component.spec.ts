import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburguesaAdaptativeComponent } from './menu-hamburguesa-adaptative.component';

describe('MenuHamburguesaAdaptativeComponent', () => {
  let component: MenuHamburguesaAdaptativeComponent;
  let fixture: ComponentFixture<MenuHamburguesaAdaptativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHamburguesaAdaptativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHamburguesaAdaptativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
