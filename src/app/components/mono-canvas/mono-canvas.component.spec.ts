import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoCanvasComponent } from './mono-canvas.component';

describe('MonoCanvasComponent', () => {
  let component: MonoCanvasComponent;
  let fixture: ComponentFixture<MonoCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
