import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceGoogleComponent } from './face-google.component';

describe('FaceGoogleComponent', () => {
  let component: FaceGoogleComponent;
  let fixture: ComponentFixture<FaceGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
