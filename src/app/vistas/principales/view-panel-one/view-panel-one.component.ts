import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-panel-one',
  templateUrl: './view-panel-one.component.html',
  styleUrls: ['./view-panel-one.component.css']
})
export class ViewPanelOneComponent implements OnInit {

  @ViewChild('sideTrigger', {static: true}) sideTrigger: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
        this.sideTrigger.nativeElement.classList.toggle("visible");
  }

 

}
