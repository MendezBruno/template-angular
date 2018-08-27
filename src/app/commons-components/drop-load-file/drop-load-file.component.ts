import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { LogsCustom } from '../../utils/logs';

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
  @ViewChild('panelDrop') panelDrop: ElementRef;
  dropZone;
  allowedExtensions: RegExp;  
  
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


    if (this.multiFile) {
      this.files.emit(files);
    } else {
      this.file.emit(files[0]);
    }
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

}

