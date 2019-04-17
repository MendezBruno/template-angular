import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-expresiones-regulares',
  templateUrl: './expresiones-regulares.component.html',
  styleUrls: ['./expresiones-regulares.component.css']
})
export class ExpresionesRegularesComponent implements OnInit {


  myCustomForm = this.fb.group({
    fvc: ['',Validators.required],
  });

  myExpReg
  model: any = {};
  DIGITS_REGEXP =  new RegExp(/^[0-9]+([,][0-9]{0,2})?$/g);
  PARCIAL_DIGITS_REGEXP = new RegExp(/^([0-9]+([,|.][0-9]{0,1})?)/g);
  ONLY_NUMBER = new RegExp(/[0-9]*/g);

  constructor(private fb: FormBuilder) {
    this.model = {};
    this.model.expresionesRegulares = [];
    let variableExpr = new MyExpReg('^[0-9]+([,][0-9]{0,2})?$', 'DIGITS_REGEXP'  );
    this.model.expresionesRegulares.push( variableExpr );
    this.model.expresionesRegulares.push( new MyExpReg('^([0-9]+([,|.][0-9]{0,1})?)', 'PARCIAL_DIGITS_REGEXP'  ) );
    this.model.expresionesRegulares.push( new MyExpReg('[0-9]*', 'ONLY_NUMBER'  ) );


  }


  onSubmit() {
    console.log("get Submit now: ")
  }

  deco: Decorateclass;

  ngOnInit() {
    this.deco = new Decorateclass();   
  }

  
  doItChange() {
    this.model.match = String(this.model.texto).match(this.model.myExpReg.expReg) ;
    this.model.test =  this.model.myExpReg.expReg.test(this.model.texto);
    this.model.replace =  this.model.texto.replace(this.model.myExpReg.expReg,'');
    this.model.exec = this.model.myExpReg.expReg.exec( this.model.texto );

  }

  doItChangeByInput() {
    let anExpr = new MyExpReg(this.model.expRegInput);
    this.model.myExpReg = anExpr
    this.model.expresionesRegulares.push(anExpr);
    
  }

}

class MyExpReg {
  
  expReg: RegExp;
  displayExp;

  constructor(expReg, displayExp?) {
    this.expReg = new RegExp(expReg,'g');
    
    this.displayExp = displayExp;

  }
}

function MyDecorator() {
    console.log("class to decorate: " );
    return function(target) {
     console.log(Object.getOwnPropertyNames(target) );
      console.log('Our decorated class', target);
    };

}

@MyDecorator()
class Decorateclass {

    unaPalabra: string = "Hola";
    otraPalabra: string = "Mondo";

    constructor() {
      debugger;
      console.log('create decorateclass with a decorator')
    }

    miFuncionMiau() {
      console.log('holaaaa')
    }
}

/*

string.match (without 'g'):
 finds the first match and returns it with the actual match,
 the index at which the text was found and the actual input, when the global flag is not used.

string.match (with 'g'):
 just returns all the matches, when the global flag is used.

*/

 
@Component({
  selector: 'app-fcv',
  template: `
    <input type="text" (input)="onMyChange($event.target.value)" [value]="value"/>
    {{value}}
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: Fcv,
    multi: true
  }],
  styles: []
})
export class Fcv implements ControlValueAccessor{
  // (input)="onChange($event.target.value)" [value]="value"
  value: string;
  onChange: (str:string) => void;
  onTouched: () => void;
  disabled: boolean;

  onMyChange(theValue) {
    this.value = theValue;
    this.onChange(theValue);

  }

  writeValue(value: any): void {
    this.value = value? value: '';
  }
  
  registerOnChange(fn: any): void {
    // throw new Error("Method not implemented.");
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
    this.disabled = isDisabled;
  }

fn(value) {
  // hace algo
}
  

} 