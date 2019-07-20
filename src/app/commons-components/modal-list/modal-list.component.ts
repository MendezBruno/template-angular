import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.css']
})
export class ModalListComponent implements OnInit {

  @ViewChild('modal', {static: true}) theModal: ElementRef;
  constructor() { }

  ngOnInit() {
    window.addEventListener("click", this.windowOnClick);
  }

  toggleModal() {
        this.theModal.nativeElement.classList.toggle("show-modal");
  }

  windowOnClick(event) {
        if (event.target === this.theModal) {
            this.toggleModal();
        }
  }

    

}
