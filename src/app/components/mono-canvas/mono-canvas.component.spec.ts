import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoCanvasComponent } from './mono-canvas.component';
import { ESolarChart } from './model';
import { SimpleChanges } from '@angular/core';

describe('MonoCanvasComponent', () => {
  let component: MonoCanvasComponent;
  let fixture: ComponentFixture<MonoCanvasComponent>;
  let esolarCanvas: ESolarChart;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoCanvasComponent);
    component = fixture.componentInstance;
    esolarCanvas = component.esolarChart;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'it be change hsize and wsize' , () => {
      component.heightCanvas = 600;
      component.widthCanvas = 800;
      component.setFormatGraph(component.widthCanvas, component.heightCanvas);
      expect( component.hsize ).toBe( 600 );
      expect( component.wsize ).toBe( 800 );
  });
});
