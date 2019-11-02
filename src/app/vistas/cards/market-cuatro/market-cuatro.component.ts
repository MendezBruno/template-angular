import { Component, OnInit } from '@angular/core';
import {Publicacion} from './modelSample';
import {DialogService, MessageService} from 'primeng/api';
import {EditPublicationComponent} from '../../../dynamic-dialog-demo-module/common-dialog/common-dialog.component';

@Component({
  selector: 'app-market-cuatro',
  templateUrl: './market-cuatro.component.html',
  styleUrls: ['./market-cuatro.component.css']
})
export class MarketCuatroComponent implements OnInit {

  publicacion: Publicacion;

  imagenes: any;
  editStates: EditState[] = [];
  publicaciones: Publicacion[];
  currentPhoto = 0;

  constructor(public dialogService: DialogService, public messageService: MessageService) {
    this.publicacion = new Publicacion('' +
      'Unidad',
      100,
      300,
      10,
      ['assets/img/carnes/asado-tira.jpg'],
      'Un Producto',
      'Titulo publicacion');
    this.publicaciones.push(this.publicacion);
    this.initilizeEdit(this.publicaciones);
  }

  initilizeEdit(publicaciones) {
    let publicacion: any;
    for ( publicacion of publicaciones) {
      if (publicacion) {
        const editState = {id: publicacion.id, state: false};
        this.editStates.push(editState);
      }
    }
    console.log('inicialice estado de publicaciones');
    console.log(this.editStates);
  }

  cambiarImagen(publicacion) {
    this.currentPhoto = this.currentPhoto + 0;
    // this.imagenPath = publicacion.fotos[this.currentPhoto].url;
  }

  changeActiveState(checked: boolean, publicacion: Publicacion) {
    publicacion.activada = checked;
  }

  isEdit(publicacion): boolean {
    let editEstate: EditState;
    if (this.editStates !== undefined) { editEstate = this.editStates.find(editState => editState.id === publicacion.id); }
    return editEstate.state;
  }

  changeStateEdit(publicacion) {
    const auxEditState = this.editStates.find(editState => editState.id === publicacion.id);
    auxEditState.state = !auxEditState.state;
  }

  ngOnInit(): void {
  }
/*
  changeDescription(publicacion: Publicacion): void {
    const dialogRef = this.dialog.open(EditPublicationComponent, {
      width: '250px',
      data: { publicacionData: publicacion.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        publicacion.description = result;
        if (!this.isEdit(publicacion)) { this.changeStateEdit(publicacion); }
      }
    });
  }

  changePrecio(publicacion: Publicacion): void {
    const dialogRef = this.dialog.open(EditPublicationComponent, {
      width: '250px',
      data: { publicacionData: publicacion.precio }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        publicacion.precio = result;
        if (!this.isEdit(publicacion)) { this.changeStateEdit(publicacion); }
      }
    });
  }

  changeCantidad(publicacion: Publicacion): void {
    const dialogRef = this.dialog.open(EditPublicationComponent, {
      width: '250px',
      data: { publicacionDataCantidad: publicacion.cantidad, publicacionDataTipoCantidad: publicacion.tipoCantidad }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        if (result.publicacionDataCantidad) { publicacion.cantidad = result.publicacionDataCantidad; }
        if (result.publicacionDataTipoCantidad)  {publicacion.tipoCantidad = result.publicacionDataTipoCantidad; }
        if (!this.isEdit(publicacion)) {this.changeStateEdit(publicacion); }
      }
    });
  }

  changeStock(publicacion: Publicacion) {
    const dialogRef = this.dialog.open(EditPublicationComponent, {
      width: '250px',
      data: { publicacionDataStock: publicacion.stock }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        if (result >= 0) { publicacion.stock = result; }
        if (!this.isEdit(publicacion)) {this.changeStateEdit(publicacion); }
      }
    });
  }

  saveChangesPublication(publicacion) {
    const data = new ConfirmDialogModel();
    data.title = 'Guardar Cambios';
    data.question = 'Quiere Guardar los cambios?';
    const dialogRef = this.dialog.open(DialogConfirmComponent, { data });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.pcf.updatePublicacion(publicacion);
          this.changeStateEdit(publicacion);
        }
      }
    );
  }

  updatePhotoPublication(publicacion: Publicacion) {
    const dialogRef = this.dialog.open(DialogSelectPhotosComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          if (publicacion.fotos) {publicacion.fotos = publicacion.fotos.concat(result); } else {publicacion.fotos = result; }
          if (!this.isEdit(publicacion)) {this.changeStateEdit(publicacion); }
        }
        console.log(publicacion.fotos);
      }
    );
  }

  deletePublication(publicacion) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: { titulo: 'Borrar Publicación', pregunta: 'Está seguro que desea borrar la publicación?' }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          // this.pcf.deletePublicacion(publicacion.id);
        }
      }
    );
  }


*/
  deletePublication(publicacion: Publicacion) {


  }

  updatePhotoPublication(publicacion: Publicacion) {


  }

  saveChangesPublication(publicacion: Publicacion) {

  }

  changeStock(publicacion: Publicacion) {

  }

  changeCantidad(publicacion: Publicacion) {

  }

  changePrecio(publicacion: Publicacion) {

  }

  changeDescription(publicacion: Publicacion) {

  }
}


interface EditState {
  id: string;
  state: boolean;

}



