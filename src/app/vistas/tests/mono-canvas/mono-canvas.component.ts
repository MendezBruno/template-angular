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
  }

  draw() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.clearRect(0, 0, Number(this.wsize), Number(this.hsize));
   
}

}
