import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drop-load-file',
  templateUrl: './drop-load-file.component.html',
  styleUrls: ['./drop-load-file.component.css']
})
export class DropLoadFileComponent implements OnInit {

  @ViewChild('panelDrop') panelDrop: ElementRef;
  dropZone;

  constructor() { 
    // Setup the dnd listeners.
  }
  
  ngOnInit() {
    this.dropZone = document.getElementById('drop_zone');
    this.dropZone.addEventListener('dragover', this.handleDragOver, false);
    this.dropZone.addEventListener('drop', this.handleFileSelect, false);
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
    console.log(files);
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }


  /*
  
   // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  
  */


}
