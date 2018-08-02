import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUnoComponent } from './footer-uno.component';

describe('FooterUnoComponent', () => {
  let component: FooterUnoComponent;
  let fixture: ComponentFixture<FooterUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
