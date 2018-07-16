import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-item-uno',
  templateUrl: './item-uno.component.html',
  styleUrls: ['./item-uno.component.css'],
  animations: [
    trigger('flyLeftToRigth', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),

    trigger('flyRigthToLeft', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        transform: 'translateX(+100%)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])

  ]
})
export class ItemUnoComponent implements OnInit {

  state = 'hide';
  @Input() item: Item;
  @ViewChild ('angularContainer') angularContainer: ElementRef;

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.angularContainer.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (this.state === 'hide' && (scrollPosition >= componentPosition)) {
        this.state = 'show';
      }

    }

  ngOnInit() {
  }

}

interface Item {
  logo: string;
  titulo: string;
  pharagrap: string;
}
