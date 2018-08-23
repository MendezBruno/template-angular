import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStickToolbarComponent } from './simple-stick-toolbar.component';

describe('SimpleStickToolbarComponent', () => {
  let component: SimpleStickToolbarComponent;
  let fixture: ComponentFixture<SimpleStickToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleStickToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleStickToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
