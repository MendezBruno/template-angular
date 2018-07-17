import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mono-org',
  templateUrl: './mono-org.component.html',
  styleUrls: ['./mono-org.component.css']
})
export class MonoOrgComponent implements OnInit {


  item: any = {};
  imagenes = [ ];
  constructor() {
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
  }

  ngOnInit() {
    this.item.titulo = 'LALALA';
    this.item.pharagrap = 'Texto explicativo sobre lo que estas viendo en esta seccion lalalalaalalalalalalalal';
    this.item.logo = '../../../../assets/img/logos/angular.png';

  }

}





class Imagen {
  url: string;
}
