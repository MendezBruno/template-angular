import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones-regulares',
  templateUrl: './expresiones-regulares.component.html',
  styleUrls: ['./expresiones-regulares.component.css']
})
export class ExpresionesRegularesComponent implements OnInit {

  myExpReg

  model: any = {};
  DIGITS_REGEXP =  new RegExp(/^[0-9]+([,][0-9]{0,2})?$/g);
  PARCIAL_DIGITS_REGEXP = new RegExp(/^([0-9]+([,|.][0-9]{0,1})?)/g);
  ONLY_NUMBER = new RegExp(/[0-9]*/g);

  constructor() {
    this.model = {};
    this.model.expresionesRegulares = [];
    let variableExpr = new MyExpReg('^[0-9]+([,][0-9]{0,2})?$', 'DIGITS_REGEXP'  );
    this.model.expresionesRegulares.push( variableExpr );
    this.model.expresionesRegulares.push( new MyExpReg('^([0-9]+([,|.][0-9]{0,1})?)', 'PARCIAL_DIGITS_REGEXP'  ) );
    this.model.expresionesRegulares.push( new MyExpReg('[0-9]*', 'ONLY_NUMBER'  ) );


  }

  ngOnInit() {
    
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


/*

string.match (without 'g'):
 finds the first match and returns it with the actual match,
 the index at which the text was found and the actual input, when the global flag is not used.

string.match (with 'g'):
 just returns all the matches, when the global flag is used.

*/