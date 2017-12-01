import { TestBed, inject } from '@angular/core/testing';

import { TropicalFruitsService } from './tropical-fruits.service';

describe('TropicalFruitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TropicalFruitsService]
    });
  });

  it('should be created', inject([TropicalFruitsService], (service: TropicalFruitsService) => {
    expect(service).toBeTruthy();
  }));
});
