import { TestBed } from '@angular/core/testing';

import { DirtMapService } from './dirt-map.service';

describe('DirtMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirtMapService = TestBed.get(DirtMapService);
    expect(service).toBeTruthy();
  });
});
