import { TestBed } from '@angular/core/testing';

import { HealthcareDataService } from './healthcare-data.service';

describe('HealthcareDataService', () => {
  let service: HealthcareDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthcareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
