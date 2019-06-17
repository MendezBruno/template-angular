import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { flyLeftToRigth, flyRigthToLeft } from '../../../commons-components/animations/animations.component';

@Component({
  selector: 'app-item-uno',
  templateUrl: './item-uno.component.html',
  styleUrls: ['./item-uno.component.css'],
  animations: [flyLeftToRigth, flyRigthToLeft]
})
export class ItemUnoComponent implements OnInit {

  state = 'hide';
  @Input() item: Item;
  @ViewChild ('angularContainer', {static: true}) angularContainer: ElementRef;

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.getBoundingClientRect().top;
      const componentHeigth = this.angularContainer.nativeElement.offsetHeight;
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
