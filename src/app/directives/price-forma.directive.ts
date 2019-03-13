import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPriceForma]' 
})
export class PriceFormaDirective {
    
  nextKey;  
  DIGITS_REGEXP =  new RegExp(/^[0-9]+([,][0-9]{0,2})?$/g);
  PARCIAL_DIGITS_REGEXP = new RegExp(/^([0-9]+([,|.][0-9]{0,1})?)/g);
  ONLY_NUMBER = new RegExp(/[0-9]*/g);
  constructor(private el?: ElementRef) { 
    this.el.nativeElement.onpaste = (e:any) => {
      e.preventDefault();
      let text;
      debugger
      let clp = (e.originalEvent || e).clipboardData;
      if (clp === undefined || clp === null) {
          text = (<any>window).clipboardData.getData('text') || '';
          if (text !== '') {
              text = text.replace(this.DIGITS_REGEXP, '');
          }
      } else {
          text = clp.getData('text/plain') || '';
          if (text !== '') {
              text = text.replace(this.DIGITS_REGEXP, '');
              document.execCommand('insertText', false, text);
          }
      }
  };
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
    
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    this.nextKey = event.key;
    
    if ( (e.keyCode == 110 ||  e.keyCode == 190) && next && this.areEqualToRegExp( next, this.PARCIAL_DIGITS_REGEXP ) ) {
        return
    }
    
    //   let next: string = current.concat(event.key);
    if (next && !String(next).match(this.DIGITS_REGEXP) && !this.areEqualToRegExp(event.key,this.ONLY_NUMBER)) { 
      event.preventDefault();
    } else {
        
        console.log('entre por el prevent default')
    }
  }

  
  
  
    @HostListener("input", ["$event.target"]) onInput(target) {

        if (this.areEqualToRegExp(target.value , this.DIGITS_REGEXP) || this.areEqualToRegExp(target.value ,this.PARCIAL_DIGITS_REGEXP) ) { 
            this.el.nativeElement.value = this.el.nativeElement.value.replace('.',',');
            target.classList.remove('has-error');
        } else {
            target.classList.add('has-error'); 
            let lastInput: string = this.el.nativeElement.value;
            lastInput = this.nextKey;
            let filterman = String(this.el.nativeElement.value).match(this.DIGITS_REGEXP);
            console.log(filterman);
            let lastChart = lastInput[lastInput.length-1];

            if ( !this.areEqualToRegExp(lastChart,this.ONLY_NUMBER) ) {
                this.el.nativeElement.value = '';
            } else {
                target.classList.remove('has-error');
                this.el.nativeElement.value = lastInput.substring(0, lastInput.length-1);
            }
        }  
        
    }
    
    areEqualToRegExp(next: string, expReg): boolean {
      let expMatch = !!String(next).match(expReg)? String(next).match(expReg)[0]:"" 
      return next == expMatch;
    }

    // @HostListener('focus', ['$event.target']) onFocus(target: any) {
    //     console.log("Focus called from HostListener");
    //     debugger;
    //     if (!this.areEqualToRegExp(target.value , this.DIGITS_REGEXP) && target.value != '') {
    //         target.classList.add('has-error'); 
    //     } else {
    //         target.classList.remove('has-error');
    //     }
    //     // target.classList.remove('ui-state-highlight');
        
    // }

}


// String(next).match(this.PARCIAL_DIGITS_REGEXP)