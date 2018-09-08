import { Injectable } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private observerSpinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  observerSpinner: Observable<boolean> = this.observerSpinner$.asObservable();

  constructor() { }

  spinnerChangueState(value: boolean) {
    this.observerSpinner$.next(value);
  }
}
