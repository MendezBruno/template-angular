import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dosDecimalesFormatter]'
})
// tslint:disable-next-line:class-name
export class dosDecimalFormatDirective implements OnInit {


  DIGITS_REGEXP =  new RegExp(/^[0-9]{1,6}(\.[0-9]{0,2}){0,1}$/g);
  constructor(private el?: ElementRef) {  }

@HostListener('keydown', ['$event']) onKeyDown(event) {
  let e = <KeyboardEvent> event;
  if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+C
    (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+V
    (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+X
    (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.DIGITS_REGEXP)) { 
      event.preventDefault();
    }
             
  }

  ngOnInit() { }
}
