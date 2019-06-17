import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasButtonUnoComponent } from './tras-button-uno.component';

describe('TrasButtonUnoComponent', () => {
  let component: TrasButtonUnoComponent;
  let fixture: ComponentFixture<TrasButtonUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasButtonUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasButtonUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
