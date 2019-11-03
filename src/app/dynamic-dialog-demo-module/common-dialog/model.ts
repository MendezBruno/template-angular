export class DataDialog {
  field: any;
  placeholder: string;
  typeEdition: string;
  options: any[] = [];

  constructor (field, placeholder) {
    this.field = field;
    this.placeholder = placeholder;
  }
}

export enum TypeEdition {
  'num',
  'text',
  'dropdown',
  'date'
}
