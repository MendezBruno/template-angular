import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { ArrayUtils } from '../../utils/arrayUtils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input()
  mostrar: boolean;
  spinnerSubcription: Subscription;
  acumA: string[] = [];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.spinnerSubcription = this.communicationService.observerSpinner.subscribe(
      (value: any) => {
        // if (value.servicio == "bepa") { return }
        value.bool ? this.acumA.push(value.servicio) : ArrayUtils.remove(this.acumA, value.servicio);
        console.log('Los LLamados acumulados son: ', this.acumA);
        if (this.acumA.length === 0 && !value.bool) {this.mostrar = false; }
        if (this.acumA.length === 1 && value.bool)  {this.mostrar = true; }
      }
    );
  }

}
