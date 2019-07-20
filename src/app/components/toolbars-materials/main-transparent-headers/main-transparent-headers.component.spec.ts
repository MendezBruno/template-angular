import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTransparentHeadersComponent } from './main-transparent-headers.component';

describe('MainTransparentHeadersComponent', () => {
  let component: MainTransparentHeadersComponent;
  let fixture: ComponentFixture<MainTransparentHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTransparentHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTransparentHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
