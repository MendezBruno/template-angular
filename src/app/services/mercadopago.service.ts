import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var Mercadopago;

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  constructor() {
    console.log(Mercadopago);
    Mercadopago.setPublishableKey(environment.mercadoPagoPublicKey);
    console.log(Mercadopago.getIdentificationTypes());
  }

  getIdentificationTypes() {
    Mercadopago.getIdentificationTypes();
  }

  getPaymentMethod(payObject, setPaymentMethodInfo)  {
    Mercadopago.getPaymentMethod(payObject, setPaymentMethodInfo);
  }

  getBin() {
    Mercadopago.getBin();
  }


}
