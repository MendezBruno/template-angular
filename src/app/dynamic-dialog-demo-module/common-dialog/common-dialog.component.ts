import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {DataDialog} from './model';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* result(car: Car) {
    this.ref.close(car);
  }*/

}

@Component({
  selector: 'app-common-dialog',
  templateUrl: '../templates-dialog/edit-publicacion.component.html',
  // styleUrls: ['./common-dialog.component.css']
})
export class EditPublicationComponent implements OnInit {

  data: DataDialog;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.data = this.config.data;
  }

  result(result: DataDialog) {
    this.ref.close(result);
  }

  onNoClick() {
    this.ref.close();
  }

}




