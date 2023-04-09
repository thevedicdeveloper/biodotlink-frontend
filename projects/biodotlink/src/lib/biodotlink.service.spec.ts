import { TestBed } from '@angular/core/testing';

import { BiodotlinkService } from './biodotlink.service';

describe('BiodotlinkService', () => {
  let service: BiodotlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiodotlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
