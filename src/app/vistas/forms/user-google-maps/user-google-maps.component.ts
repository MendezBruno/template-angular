import { Component, OnInit } from '@angular/core';
import { EsriProvider } from 'leaflet-geosearch';

declare let L;


@Component({
  selector: 'app-user-google-maps',
  templateUrl: './user-google-maps.component.html',
  styleUrls: ['./user-google-maps.component.css']
})
export class UserGoogleMapsComponent implements OnInit {

  nuevoUsuario: any = {};
  map: any;
  ultimoMarker: any;
  provider = new EsriProvider();


  constructor() { }

  ngOnInit() {

    this.map = L.map('mapid').setView([-34.603722, -58.381592], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    document.querySelector('#botonValidar').addEventListener('click', async (event) => {
      event.preventDefault();

      const results = await this.provider.search({ query: this.nuevoUsuario.direccion });

      this.nuevoUsuario.direccionValida = results.length > 0;

      if (this.ultimoMarker != null) {
          this.map.removeLayer(this.ultimoMarker);
      }

      if (!(this.nuevoUsuario.direccionValida)) {
        alert('La dirección no es valida');
      } else {
        const x = results[0].x;
        const y = results[0].y;

        this.ultimoMarker = L.marker([y, x]);

        this.ultimoMarker.addTo(this.map)
        .bindPopup(this.nuevoUsuario.direccion)
        .openPopup();
      }

    });

  }

  guardarUsuario() {
    console.log(this.nuevoUsuario);
  }

}
