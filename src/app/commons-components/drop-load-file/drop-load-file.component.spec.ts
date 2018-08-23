import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropLoadFileComponent } from './drop-load-file.component';

describe('DropLoadFileComponent', () => {
  let component: DropLoadFileComponent;
  let fixture: ComponentFixture<DropLoadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropLoadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropLoadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
