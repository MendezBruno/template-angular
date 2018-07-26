import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mono-org',
  templateUrl: './mono-org.component.html',
  styleUrls: ['./mono-org.component.css']
})
export class MonoOrgComponent implements OnInit {


  items = [];
  imagenes = [ ];
  imagenes2 = [];
  imagesPerFrameBig = 1;
  imagesPerFrameSmall = 3;

  constructor() {
    this.prepararCarrusel();
    this.prepararItemUno();
  }

  ngOnInit() {


  }


  prepararItemUno() {
    // item angular
    const item1: any = {};
    item1.titulo = 'LALALA';
    item1.pharagrap = 'Texto explicativo sobre lo que estas viendo en esta seccion lalalalaalalalalalalalal';
    item1.logo = '../../../../assets/img/logos/angular-svg.svg';
    this.items.push(item1);
    // item node
    const item2: any = {};
    item2.titulo = 'LALALA';
    item2.pharagrap = 'Texto explicativo sobre lo que estas viendo en esta seccion lalalalaalalalalalalalal';
    item2.logo = '../../../../assets/img/logos/node.svg';
    this.items.push(item2);
    // htnl5 css logo HTML5CSS3Logos
    const item3: any = {};
    item3.titulo = 'LALALA';
    item3.pharagrap = 'Texto explicativo sobre lo que estas viendo en esta seccion lalalalaalalalalalalalal';
    item3.logo = '../../../../assets/img/logos/HTML5CSS3Logos.svg';
    this.items.push(item3);
  }

  prepararCarrusel() {
    const imagen1 = new Imagen();
    const imagen2 = new Imagen();
    const imagen3 = new Imagen();
    const imagen4 = new Imagen();
    const imagen5 = new Imagen();
    imagen1.url = '../../../../assets/img/programming/code-1839406_640.jpg';
    imagen2.url = '../../../../assets/img/programming/code-2620118_640.jpg';
    imagen3.url = '../../../../assets/img/programming/coding-924920_640.jpg';
    imagen4.url = '../../../../assets/img/programming/computer-1209641_640.jpg';
    imagen5.url = '../../../../assets/img/programming/technology-785742_640.jpg';
    this.imagenes.push(imagen1);
    this.imagenes.push(imagen2);
    this.imagenes.push(imagen3);
    this.imagenes.push(imagen4);
    this.imagenes.push(imagen5);

    this.imagenes2.push(imagen1);
    this.imagenes2.push(imagen2);
    this.imagenes2.push(imagen3);
    this.imagenes2.push(imagen4);
    this.imagenes2.push(imagen5);
    this.imagenes2.push(imagen1);
    this.imagenes2.push(imagen2);
    this.imagenes2.push(imagen3);
    this.imagenes2.push(imagen4);
    this.imagenes2.push(imagen5);

  }

}





class Imagen {
  url: string;
}
