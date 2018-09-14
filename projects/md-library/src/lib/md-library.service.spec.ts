import { TestBed, inject } from '@angular/core/testing';

import { MdLibraryService } from './md-library.service';

describe('MdLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdLibraryService]
    });
  });

  it('should be created', inject([MdLibraryService], (service: MdLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
