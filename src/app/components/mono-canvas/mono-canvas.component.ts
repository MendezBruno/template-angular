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
  wsize = 600;
  hsize = 400;

  // Margenes de los ejes de coordenadas
  margenY = 15;
  margenX = 20;

  // Origne del eje de coordenadas
  factorEscalaX: number = 20;
  factorEscalaY: number = 10;
  origenX = this.margenX;
  origenY = this.hsize - this.margenY;
  escalaX = this.wsize / this.factorEscalaX;
  escalaY = this.hsize / this.factorEscalaY;

  // opciones de el texto
  font = '7pt Verdana';
  textAling = 'center';
  textLineWidth = 4;
  iteracionX = 30;
  iteracionY = 40;
  pointSize = 2;


  constructor() { }

  ngAfterViewInit() {
    this.inicializarCanvas();

  }

  // Dibuja el grafico
  inicializarCanvas(): any {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    // Eje X
    this.drawLine(this.origenX , this.origenY , this.wsize , this.origenY);

    // Eje y
    this.drawLine(this.origenX , this.origenY , this.origenX , this.hsize - this.origenY);

    // labels
    let label = 0;
    let sumIteration = 0;
    let veces = (this.wsize / this.iteracionX);
    // this.text( label.toString() , this.origenX + label, this.origenY + this.margenY);
    for (let i = 0; i <= veces ; i++) {
      // para el eje X
      this.text( ( Math.round( label / this.escalaX)).toString() , this.origenX + sumIteration, this.origenY + this.margenY);
      sumIteration = sumIteration + this.iteracionX;
      label = label + this.iteracionX;
    }

    label = 0;
    sumIteration = 0; 
    veces = (this.hsize / this.iteracionY);
    for (let i = 0; i <= veces; i++) {
      // para el eje Y
      this.text( ( Math.round( label / this.escalaY)).toString()  , this.origenX - (this.margenX / 2), this.origenY - sumIteration);
      sumIteration = sumIteration + this.iteracionY
      label = label + this.iteracionY;
    }

    this.drawCoordinates(0, 5);
    this.drawCoordinates(15 , 5);
    this.drawCoordinates(30 , 5);
  }

  ngOnInit() { }

  drawLine(startX, startY, endX, endY) {

    this.ctx.beginPath();

    this.ctx.moveTo(startX, startY);

    this.ctx.lineTo(endX, endY);

    this.ctx.stroke();
  }

  setLineWidth( width: number ) {
    // Indicar el grosor de la línea
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

  text(labelsText: string, positionX: number, positionY: number) {
    if (this.ctx) {
      this.ctx.textAlign = 'center'
      this.ctx.font = this.font;
      // this.ctx.fillStyle = "blue";   color de la letra
      this.ctx.lineWidth = this.textLineWidth;
      this.ctx.fillText(labelsText, positionX, positionY);
    }
  }

  drawCoordinates(unidadX: number, unidadY: number) {
    this.ctx.fillStyle = '#0c0c0c'; // Red color
    this.ctx.beginPath();
    this.ctx.arc(this.origenX + unidadX * this.escalaX, this.origenY - unidadY * this.escalaY, this.pointSize, 0, Math.PI * 2, true);
    this.ctx.fill();
}



}
