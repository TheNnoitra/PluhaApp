import { TestBed } from '@angular/core/testing';

import { GitUserInfoService } from './git-user-info.service';

describe('GitUserInfoService', () => {
  let service: GitUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
