import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class CommunicationService {

  private observerSpinner:BehaviorSubject<SpinnerClass> = new BehaviorSubject<SpinnerClass>(new SpinnerClass(false, ''));
  observerSpinner$: Observable<SpinnerClass> = this.observerSpinner.asObservable();

  constructor() { }

  spinnerChangueState(value: SpinnerClass) {
    this.observerSpinner.next(value);
  }
}



class SpinnerClass {
  bool: boolean;
  servicio: string;
  constructor(bool, servicio) {
    this.bool = bool;
    this.servicio = servicio;
  }
} 