import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mono-canvas',
  templateUrl: './mono-canvas.component.html',
  styleUrls: ['./mono-canvas.component.css']
})
export class MonoCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('grafico')
  canvasRef: ElementRef;

  public ctx: CanvasRenderingContext2D;

  wsize='150';
  hsize='150';

  constructor() { }

  ngAfterViewInit() {
    this.draw();
  }

  ngOnInit() {
    this.draw();
  }

  draw() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.strokeRect(50,50,50,50);
    this.ctx.fillRect(25,25,100,100)
  }

}
