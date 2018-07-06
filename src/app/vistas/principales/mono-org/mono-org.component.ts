import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mono-org',
  templateUrl: './mono-org.component.html',
  styleUrls: ['./mono-org.component.css']
})
export class MonoOrgComponent implements OnInit {



  imagenes = [ ];
  constructor() {
    let imagen1 = new Imagen();
    let imagen2 = new Imagen();
    let imagen3 = new Imagen();
    imagen1.url = '../../../../assets/img/muppets/muppets1.jpeg';
    imagen2.url = '../../../../assets/img/muppets/muppets2.jpeg';
    imagen3.url = '../../../../assets/img/muppets/muppets3.jpeg';
    this.imagenes.push(imagen1);
    this.imagenes.push(imagen2);
    this.imagenes.push(imagen3);
  }

  ngOnInit() {
  }

}





class Imagen {
  url: string;
}
