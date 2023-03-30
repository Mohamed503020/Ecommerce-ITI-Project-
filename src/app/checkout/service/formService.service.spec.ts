/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormServiceService } from './formService.service';

describe('Service: FormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormServiceService]
    });
  });

  it('should ...', inject([FormServiceService], (service: FormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
