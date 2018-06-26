import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})



export class TurnosComponent implements OnInit {

  nuevoTurno: any = {};
  selected = 'turno-1';
  turnos = [
    {value: 'turno-0', viewValue: '10:00'},
    {value: 'turno-1', viewValue: '11:00'},
    {value: 'turno-2', viewValue: '12:00'},
    {value: 'turno-3', viewValue: '13:00'},
    {value: 'turno-4', viewValue: '14:00'},
    {value: 'turno-5', viewValue: '15:00'}
  ];
  minDate = new Date();  // Al iniciarlo con un tipo de dato "Date" a la variable no se le puede asignar otro tipo de dato

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


  constructor() { }

  ngOnInit() {
  }

  guardarTurno() {

    const dateCompleto = this.dameDateCompleto();

    this.nuevoTurno.fecha = dateCompleto;

    console.log(this.nuevoTurno);

  }

  dameDateCompleto() {
      for ( let i = 0; i < this.turnos.length; i++) {

        if (this.turnos[i].value === this.selected) {
            const cadenas = this.turnos[i].viewValue.split(':');
            return new Date(this.nuevoTurno.fecha.getFullYear(),this.nuevoTurno.fecha.getMonth(),this.nuevoTurno.fecha.getDate(),parseInt(cadenas[0]),parseInt(cadenas[1]));
        }
      }
  }



}
