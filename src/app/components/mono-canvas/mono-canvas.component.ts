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

  
  // Tamaño del Lienzo
  wsize = 150;
  hsize = 150;

  //Margenes de los ejes de coordenadas
  margenY = 20;
  margenX = 20;

  // Origne del eje de coordenadas
  origenX = this.margenX; 
  origenY = this.hsize - this.margenY;

  constructor() { }

  ngAfterViewInit() {
    this.inicializarCanvas();
    
  }

  inicializarCanvas(): any {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    // Eje X
    this.drawLine(this.origenX , this.origenY , this.wsize , this.origenY);

    // Eje y
    this.drawLine(this.origenX , this.origenY , this.origenX , this.hsize - this.origenY);
  }

  ngOnInit() { }

  drawLine(startX, startY, endX, endY){
 
    this.ctx.beginPath();
 
    this.ctx.moveTo(startX,startY);
 
    this.ctx.lineTo(endX,endY);
 
    this.ctx.stroke()
  }

  setLineWidth( width:number ) {
    //Indicar el grosor de la línea
    this.ctx.lineWidth = width;
  }

  // comparador(fecha1,fecha2) {
  //   let aFecha1, aFecha2;
  //   let i: number = 0;
  //   aFecha1 = fecha1.split('-')
  //   aFecha2 = fecha2.split('-')

  //   while (aFecha1.length < i ) {
  //     if  (Number(aFecha1[i]) < Number(aFecha2[i])) return -1;
  //     if  (Number(aFecha1[i]) > Number(aFecha2[i])) return 1;
  //   }

  //   return 0
  // }



}
