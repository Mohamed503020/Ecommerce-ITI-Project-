/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllOrdersService } from './allOrders.service';

describe('Service: AllOrders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllOrdersService]
    });
  });

  it('should ...', inject([AllOrdersService], (service: AllOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
