import { TestBed, inject } from '@angular/core/testing';

import { MercadopagoService } from './mercadopago.service';

describe('MercadopagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadopagoService]
    });
  });

  it('should be created', inject([MercadopagoService], (service: MercadopagoService) => {
    expect(service).toBeTruthy();
  }));
});
