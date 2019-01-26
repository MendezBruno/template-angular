export class OptionGraph {

    line: LineOptions = new LineOptions();


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


  constructor () {
      this.fontSize = this.sizeText + ' ' + this.fontText;
  }

  setSize (size: number) {
    this.fontSize = size + ' ' + this.fontText;
  }
}

