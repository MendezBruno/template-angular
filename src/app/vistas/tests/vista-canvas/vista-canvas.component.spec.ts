import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCanvasComponent } from './vista-canvas.component';
import { MonoCanvasComponent } from 'src/app/components/mono-canvas/mono-canvas.component';

describe('VistaCanvasComponent', () => {
  let component: VistaCanvasComponent;
  let fixture: ComponentFixture<VistaCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ VistaCanvasComponent, MonoCanvasComponent ]
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
