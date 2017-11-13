import { TestBed, inject } from '@angular/core/testing';

import { AddCommentService } from './add-comment.service';

describe('AddCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCommentService]
    });
  });

  it('should be created', inject([AddCommentService], (service: AddCommentService) => {
    expect(service).toBeTruthy();
  }));
});
