import { Directive, ElementRef, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[priceFormat]'
})
export class PriceFormaDirective implements OnInit{

    @Input('priceFormat') decimalFomat: DecimalFormat = { integer: 8, decimal: 2};

    @Output() error: EventEmitter<any> = new EventEmitter<any>();

    DIGITS_REGEXP;
    beforeContent: string

    constructor(private el?: ElementRef) { 

        this.setRegExConfig();
        this.el.nativeElement.onpaste = (e:any) => {
          e.preventDefault();
          let text;
          let clp = (e.originalEvent || e).clipboardData;
          if (clp === undefined || clp === null) {
              text = (<any>window).clipboardData.getData('text') || '';
              if (text !== '' && text.match(this.DIGITS_REGEXP)) {
                //   text = text.replace(this.DIGITS_REGEXP, '');
                //IE11
                document.execCommand('paste', false, text);
              }
          } else {
              text = clp.getData('text/plain') || '';
              if (text !== '' && text.match(this.DIGITS_REGEXP)) {
                //   text = text.replace(this.DIGITS_REGEXP, '');
                //CRHOME
                document.execCommand('insertText', false, text);
              }
          }
      };
    }

    ngOnInit(): void {
        if(this.decimalFomat) this.setRegExConfig()
    }

    setRegExConfig() {
        this.DIGITS_REGEXP = new RegExp(`^[0-9]{0,${this.decimalFomat.integer}}([,|.][0-9]{0,${this.decimalFomat.decimal}})?$`, "g");
    }


    @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if ([46, 8, 9, 27, 13, 186].indexOf(e.keyCode) !== -1 ||
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
        //   if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        //       e.preventDefault();
        //   }

        this.beforeContent = this.el.nativeElement.value
    }

  
  
  
    @HostListener("input", ["$event.target.value"]) onInput(value) {

        this.el.nativeElement.value = this.el.nativeElement.value.replace('.', ',')
        if(!value.match(this.DIGITS_REGEXP)) {
            this.el.nativeElement.value = this.beforeContent;
            this.error.emit()
        } else {
            
        }
    }

}

interface DecimalFormat {
    integer: number;
    decimal: number;
}