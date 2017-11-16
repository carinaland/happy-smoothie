import { TestBed, inject } from '@angular/core/testing';

import { AddSmothieService } from './add-smothie.service';

describe('AddSmothieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSmothieService]
    });
  });

  it('should be created', inject([AddSmothieService], (service: AddSmothieService) => {
    expect(service).toBeTruthy();
  }));
});
