import { TestBed } from '@angular/core/testing';

import { AllBlogsService } from './all-blogs.service';

describe('AllBlogsService', () => {
  let service: AllBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
