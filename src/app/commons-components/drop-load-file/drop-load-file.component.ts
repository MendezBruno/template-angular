import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drop-load-file',
  templateUrl: './drop-load-file.component.html',
  styleUrls: ['./drop-load-file.component.css']
})
export class DropLoadFileComponent implements OnInit {

  @ViewChild('panelDrop') panelDrop: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  dispatch(event$) {
    console.log('hice drop');
    console.log(event$);
    console.log(this.panelDrop);
  }

}
