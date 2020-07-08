import { TestBed } from '@angular/core/testing';

import { CnesServiceService } from './cnes-service.service';

describe('CnesServiceService', () => {
  let service: CnesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
