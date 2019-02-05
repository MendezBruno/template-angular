import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ESolarChart, ESOLARCOLOR, Point, GenericDatasetPoints } from './model';

@Component({
  selector: 'app-mono-canvas',
  templateUrl: './mono-canvas.component.html',
  styleUrls: ['./mono-canvas.component.css']
})
export class MonoCanvasComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('grafico')
  canvasRef: ElementRef;

  theData: GenericDatasetPoints = new GenericDatasetPoints();
  public ctx: CanvasRenderingContext2D;
  public esolarChart: ESolarChart;


  @Input() widthCanvas: number;
  @Input() heightCanvas: number;
  // Tamaño del Lienzo
  wsize = 600;
  hsize = 400;

  constructor ( ) { }

  ngOnChanges(changes: SimpleChanges) {
    if ( this.widthCanvas && this.heightCanvas && changes.currentValue) {
      this.widthCanvas = changes.widthCanvas.currentValue;
      this.heightCanvas = changes.heightCanvas.currentValue;
      this.setFormatGraph( this.widthCanvas, this.heightCanvas );
    }
    this.showLineChart();
  }

  ngAfterViewInit() {
    this.showLineChart();
  }

  setFormatGraph(widthCanvas: number, heightCanvas: number): any {
    this.hsize = heightCanvas;
    this.wsize = widthCanvas;
  }

  showLineChart(): any {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.esolarChart = new ESolarChart(this.hsize, this.wsize);
    this.esolarChart.inicializarCanvas(this.ctx);
    this.esolarChart.setLineWidth(2);
    this.esolarChart.setLineColor(ESOLARCOLOR.BLUE);
    // this.esolarChart.setFactorEscalas( this.getXMax(this.theData.dataset), this.getYMax(this.theData.dataset) )
    // this.theData.dataset.forEach ( p => this.esolarChart.drawCoordinates(p.x, p.y) );



    for (let i = 0; i <= this.theData.dataset.length - 2 ; i++) {
     this.esolarChart.drawRect(
       this.theData.dataset[i].x,
       this.theData.dataset[i].y,
       this.theData.dataset[i + 1].x,
       this.theData.dataset[i + 1].y );
    }
  }

  getYMax(dataset: Point[]): number {
    return dataset.sort( (a, b) => a.y - b.y )[0].y;
  }

  getXMax(dataset: Point[]): number {
    return dataset.sort( (a, b) => a.x - b.x )[0].x;
  }



  ngOnInit() { }


  setColorBackgroud ( color) {
    this.canvasRef.nativeElement.style.background = color;
  }

}
