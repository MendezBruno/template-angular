import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  model: any = {};
  theColor: string;
  theBackground: string;
  circ: string;
  constructor() { 
    this.model.estado = 'pend. Autorizacion';
    this.model.circulos = ['1','2','3','4','5'];
    this.theColor = 'red';
    // this.theBackground = 'red';
    this.circ = 'circulo';
  }

  ngOnInit() {
    
  }


}

class PendienteAutorizacion {
  estado = 'pend. Autorizacion'
}

enum EstadosEventos {
  PENDIENTE_AUTORIZACION ='{  }'
}
