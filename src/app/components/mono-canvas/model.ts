export class ESolarChart {
    ctx;
    hsize: number;
    wsize: number;
    // Margenes de los ejes de coordenadas
    margenY;
    margenX;

    // Origne del eje de coordenadas
    factorEscalaX: number;
    factorEscalaY: number;
    origenX;
    origenY;
    escalaX;
    escalaY;

    // opciones de el texto
    font;
    textAling;
    textLineWidth;
    iteracionX;
    iteracionY;
    pointSize;


    constructor( hsize: number, wsize: number) {
      this.hsize = hsize;
      this.wsize = wsize;
      // Margenes de los ejes de coordenadas
      this.margenY = 20;
      this.margenX = 20;


      /* El factor escala es en cuantas unidades quiero partir la recta,
         El valor de la altura o el ancho divido por factor escala te dice cuantos pixeles mide una unidad
      */
      this.factorEscalaX = 30;
      this.factorEscalaY = 5;
      // Origne del eje de coordenadas
      this.origenX = this.margenX;
      this.origenY = this.hsize - this.margenY;
      this.escalaX = this.wsize / this.factorEscalaX;
      this.escalaY = this.hsize / this.factorEscalaY;

      // opciones de el texto
      this.font = '7pt Verdana';
      this.textAling = 'center';
      this.textLineWidth = 4;
      this.iteracionX = 30;
      this.iteracionY = 100;
      this.pointSize = 2;
    }

    // Dibuja el grafico
    inicializarCanvas(ctx): any {
      this.ctx = ctx;
      // this.clearCanvas();
      this.ctx.fillStyle = ESOLARCOLOR.WHITE;
      this.setLineColor(ESOLARCOLOR.WHITE);


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
        this.text( ( Math.round( label / this.escalaX)).toString() , this.origenX + sumIteration, this.origenY + (this.margenY / 2) );
        sumIteration = sumIteration + this.iteracionX;
        label = label + this.iteracionX;
      }

      label = 0;
      sumIteration = 0;
      veces = (this.hsize / this.iteracionY);
      for (let i = 0; i <= veces; i++) {
        // para el eje Y
        this.text( ( Math.round( label / this.escalaY)).toString()  , this.origenX - (this.margenX / 2), this.origenY - sumIteration);
        sumIteration = sumIteration + this.iteracionY;
        label = label + this.iteracionY;
      }

      this.drawCoordinates(26.10, 1.6);
      this.drawCoordinates(26.20, 1.5);
      this.drawCoordinates(26.30, 1.4);
      this.drawCoordinates(26.40, 1.3);
      this.drawCoordinates(26.50, 1.2);
      this.drawCoordinates(26.60, 1.1);
      // this.drawCoordinates(15 , 5);
      // this.drawCoordinates(30 , 5);
    }


    /**
     * @description draw a line taking as the starting point the default origin of the canvas element
     * @param startX begin coord x
     * @param startY begin coord y
     * @param endX finis coord x
     * @param endY finis coord y
     */
    drawLine(startX, startY, endX, endY) {

      this.ctx.beginPath();

      this.ctx.moveTo(startX, startY);

      this.ctx.lineTo(endX, endY);

      this.ctx.stroke();
    }

    /**
     * @description draw a line taking as the starting point the default origin of the coordinate axis
     * @param startX begin coord x
     * @param startY begin coord y
     * @param endX finis coord x
     * @param endY finis coord y
     */

    drawRect(startX, startY, endX, endY) {

      this.ctx.beginPath();

      this.ctx.moveTo(this.origenX + startX * this.escalaX, this.origenY - startY * this.escalaY);

      this.ctx.lineTo(this.origenX + endX * this.escalaX, this.origenY - endY * this.escalaY);

      this.ctx.stroke();
    }




    text(labelsText: string, positionX: number, positionY: number) {
      if (this.ctx) {
        this.ctx.textAlign = 'center';
        this.ctx.font = this.font;

        this.ctx.lineWidth = this.textLineWidth;
        this.ctx.fillText(labelsText, positionX, positionY);
      }
    }

    drawCoordinates(unidadX: number, unidadY: number) {
      this.ctx.beginPath();
      this.ctx.arc(this.origenX + unidadX * this.escalaX, this.origenY - unidadY * this.escalaY, this.pointSize, 0, Math.PI * 2, true);
      this.ctx.fill();
    }

    clearCanvas() {
      this.ctx.clearRect(0, 0, this.wsize, this.hsize);
    }

    setLineWidth( width: number ) {
      // Indicar el grosor de la línea
      this.ctx.lineWidth = width;
    }

    setLineColor(color: string): any {
      this.ctx.strokeStyle = color;

    }

    setFactorEscalas(maxX: number, maxY: number) {
      // TODO la cuenta tengo que pensar para setear el factor de la escala y poder usar el grafico en cualquier dimension

    }


  }


  export enum ESOLARCOLOR {
    BLUE = 'blue',
    WHITE = 'white',
    GREEN = 'green'
  }


  export class OptionGraph {
      // Margenes de los ejes de coordenadas
      margenY = 20;
      margenX = 20;
      line: LineOptions = new LineOptions();
      labels: LabelOptions = new LabelOptions();
  }


  class LineOptions {

  }

  class LabelOptions {
    // opciones de el texto
    fontSize;
    textAling = 'center';
    textLineWidth = 4;
    sizeText = '7pt';
    fontText = 'Verdana';

    // Cada cuantos pixeles se pone un label
    iteracionX = 30;
    iteracionY = 40;




    constructor () {
        this.fontSize = this.sizeText + ' ' + this.fontText;
    }

    setSize (size: number) {
      this.fontSize = size + ' ' + this.fontText;
    }
  }



export class GenericDatasetPoints {
    dataset: Point[];

    constructor() {
      this.dataset = [];
    }

    getXValues() {
      const result = [];
      this.dataset.forEach(element => {
        result.push(element.x);
      });
      return result;
  }

  getYValues() {
    const result = [];
    this.dataset.forEach(element => {
      result.push(element.y);
    });
    return result;
}

  getValues() {
    return this.dataset;
  }
}


export class Point {
    x: number;
    y: number;

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}
