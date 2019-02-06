import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoCanvasComponent } from './mono-canvas.component';
import { ESolarChart } from './model';
import { SimpleChanges } from '@angular/core';
import { MockDataSet } from './data';

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

  it( 'it be margin default ' , () => {
    component.heightCanvas = 600;
    component.widthCanvas = 800;
    component.setFormatGraph(component.widthCanvas, component.heightCanvas);
    component.esolarChart = new ESolarChart(component.heightCanvas , component.widthCanvas);
    expect( component.esolarChart.margenX ).toBe( 20 );
    expect( component.esolarChart.margenY ).toBe( 20 );

  });

  it( 'it be maximo x del dataset ' , () => {
    component.heightCanvas = 600;
    component.widthCanvas = 800;
    component.setFormatGraph(component.widthCanvas, component.heightCanvas);
    component.esolarChart = new ESolarChart(component.heightCanvas , component.widthCanvas);
    component.theData = new MockDataSet().theData;
    expect( component.getXMaxEscale( component.theData.dataset ) ).toBe( 28 );

  });

  // 2.458

  it( 'it be maximo y del dataset ' , () => {
    component.heightCanvas = 600;
    component.widthCanvas = 800;
    component.setFormatGraph(component.widthCanvas, component.heightCanvas);
    component.esolarChart = new ESolarChart(component.heightCanvas , component.widthCanvas);
    component.theData = new MockDataSet().theData;
    expect( component.getYMaxEscale( component.theData.dataset ) ).toBe( 3 );

  });

});
