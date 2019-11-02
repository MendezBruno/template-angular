import { Component, OnInit } from '@angular/core';
import {DialogService, MessageService} from 'primeng/api';
import {Publicacion} from '../../vistas/cards/market-cuatro/modelSample';
import {EditPublicationComponent} from '../common-dialog/common-dialog.component';
import {DataDialog} from '../common-dialog/model';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.css']
})
export class DynamicDialogComponent implements OnInit {

  publicacion: Publicacion;
  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit() {
    this.publicacion = new Publicacion('' +
      'Unidad',
      100,
      300,
      10,
      ['assets/img/carnes/asado-tira.jpg'],
      'Un Producto',
      'Titulo publicacion');
  }
  show() {
    const ref = this.dialogService.open(EditPublicationComponent, {
      data: {
        field: this.publicacion.titulo,
        placeholder: 'titulo',
      },
      header: 'Choose a Car',
      width: '70%'
    });

    ref.onClose.subscribe((result: DataDialog) => {
      if (result) {
        this.messageService.add({severity: 'info', summary: 'resultado', detail: 'Vin:' + result.field});
      }
    });
  }





}
