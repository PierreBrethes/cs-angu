import { TestBed } from '@angular/core/testing';

import { DataTransitService } from './data-transit.service';

describe('DataTransitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTransitService = TestBed.get(DataTransitService);
    expect(service).toBeTruthy();
  });
});
