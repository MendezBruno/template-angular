import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commons-view',
  templateUrl: './commons-view.component.html',
  styleUrls: ['./commons-view.component.css']
})
export class CommonsViewComponent implements OnInit {

  extensiones = ['.xlsx','.xls','.ods'];
  multifile = false;
  constructor() { }

  ngOnInit() {
  }

  getFiles(event) {
    console.log(event);
  }

  getFile(event) {
    console.log(event);
  }

  errorHandle(error: Error) {
    console.log( error );
  }

}
