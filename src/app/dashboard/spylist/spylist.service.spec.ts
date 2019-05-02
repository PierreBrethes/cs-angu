import { TestBed } from '@angular/core/testing';

import { SpylistService } from './spylist.service';

describe('SpylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpylistService = TestBed.get(SpylistService);
    expect(service).toBeTruthy();
  });
});
