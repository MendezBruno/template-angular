import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tras-button-uno',
  templateUrl: './tras-button-uno.component.html',
  styleUrls: ['./tras-button-uno.component.css']
})
export class TrasButtonUnoComponent implements OnInit {

  @Output() evento: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  eventClick() {
    this.evento.emit(true);
  }
}
