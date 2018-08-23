import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsViewComponent } from './commons-view.component';

describe('CommonsViewComponent', () => {
  let component: CommonsViewComponent;
  let fixture: ComponentFixture<CommonsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
