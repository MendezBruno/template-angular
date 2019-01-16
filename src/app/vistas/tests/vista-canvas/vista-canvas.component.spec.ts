import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCanvasComponent } from './vista-canvas.component';

describe('VistaCanvasComponent', () => {
  let component: VistaCanvasComponent;
  let fixture: ComponentFixture<VistaCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
