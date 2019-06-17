import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { LogsCustom } from '../../utils/logs';
import { EmitData } from '../../model/data/simpleData';
import { Actions } from '../../model/enums/actionEnums';

@Component({
  selector: 'app-drop-load-file',
  templateUrl: './drop-load-file.component.html',
  styleUrls: ['./drop-load-file.component.css']
})
export class DropLoadFileComponent implements OnInit {

  @Input() multiFile = false;
  @Input() extensions: String[];
  @Output() files: EventEmitter<FileList> = new EventEmitter<FileList>() ;
  @Output() file: EventEmitter<File> = new EventEmitter<File>() ;
  @Output() error: EventEmitter<Error> = new EventEmitter<Error>();
  @ViewChild('panelDrop', {static: true}) panelDrop: ElementRef;
  dropZone;
  allowedExtensions: RegExp;  

  // Salidas
  @Output() csvData: EventEmitter<EmitData> = new EventEmitter<EmitData>()
  //@Output() error: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { 
    // Setup the dnd listeners.

  }
  
  ngOnInit() {
    this.dropZone = document.getElementById('drop_zone');
    this.dropZone.addEventListener('dragover', this.handleDragOver, false);
    this.dropZone.addEventListener('drop', this.handleFileSelect.bind(this), false);
    this.buildAllowedExtension();
  }
  
  buildAllowedExtension(): any {
    //  /(.xlsx|.xls|.ods)$/i;
    if (this.extensions.length < 1) {
      LogsCustom.error('La extenciones deben ser mayor a 0');
      this.error.emit(new Error('La extenciones deben ser mayor a 0'));
      return;
    }
    let regexp: string;
    regexp = '(' + this.extensions[this.extensions.length-1];
    
    this.extensions.forEach(element => {
      regexp = regexp + '|' + element;  
    });
    regexp = regexp + ')$';
    
    this.allowedExtensions = new RegExp(regexp);
  }
  
  dispatch(event$) {
    console.log('hice drop');
    console.log(event$);
    console.log(this.panelDrop);
  }
  
  handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
    console.log('fueron puestos los archivos: '); 
    console.log(files);
    for (let file of files) {
       if (!this.allowedExtensions.test(file.name)) {
        LogsCustom.error('Error: Las extenciones del archivo esperadas eran: ' + this.extensions + ' y Se obtuvo: ' +'.'+ file.name.split('.').pop() );
        this.error.emit(new Error ('Error: Las extenciones del archivo esperadas eran: ' + this.extensions + ' y Se obtuvo: ' +'.'+ file.name.split('.').pop()));
        return;
      }
    }           


    // Esto emite el file que capturo
    // if (this.multiFile) {
    //   this.files.emit(files); 
    // } else {
    //   this.file.emit(files[0]);
    // }

    // aca en ves de esto iria el procces file y emitimos la data
    if (this.multiFile) {
      // emitir multiples files
    } else {
      this.processFile(files[0]);
    }
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }


  processFile(file: any): any {
    let reader = new FileReader();
    if (!this.allowedExtensions.test(file.name)) {
      LogsCustom.error('Error: Las extenciones del archivo esperadas eran: ' + this.extensions + ' y Se obtuvo: ' + '.' + file.name.split('.').pop());
     // this.error.emit('Error: Las extenciones del archivo esperadas eran: ' + this.extensions + ' y Se obtuvo: ' + '.' + file.name.split('.').pop());
      return;
    }

    reader.readAsText(file);
    reader.onload = (event) => {
      let target: any = event.target; //<-- El (any) hace que el compilador no joda
      let csv: string = target.result; // contenido del CSV
      this.extractData(csv); //Funcion para trabajar los datos del archivo
    }
  }

  extractData(data) {

    let csvData = data;
    let allTextLines: string[] = []
    allTextLines = csvData.split(/\n/)
    // let colums: string = allTextLines[0]
    // let headers = allTextLines[0].split(';')

    let allDataLines = allTextLines//.filter(e => !e.includes(colums))

    // let lines = [];

    // for ( let i = 0; i < allDataLines.length; i++) {
    //     // split content based on comma
    //     let data = allDataLines[i].split(';');
    //     if (data.length == headers.length) {
    //         let tarr = [];
    //         for ( let j = 0; j < headers.length; j++) {
    //             tarr.push(data[j]);
    //         }
    //         lines.push(tarr);
    //     }
    // }
    if (allDataLines[allDataLines.length - 1] == '') allDataLines.pop()

    this.csvData.emit(new EmitData(Actions.ALTA, allDataLines))
    // console.log(lines); //The data in the form of 2 dimensional array.
  }

}

