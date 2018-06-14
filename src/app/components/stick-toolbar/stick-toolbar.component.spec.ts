import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickToolbarComponent } from './stick-toolbar.component';

describe('StickToolbarComponent', () => {
  let component: StickToolbarComponent;
  let fixture: ComponentFixture<StickToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
