import { TestBed } from '@angular/core/testing';

import { SeralbumsService } from './seralbums.service';

describe('SeralbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeralbumsService = TestBed.get(SeralbumsService);
    expect(service).toBeTruthy();
  });
});
