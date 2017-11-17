import { TestBed, inject } from '@angular/core/testing';

import {} from 'jasmine';

import { AccountLogService } from './account-log.service';

describe('AccountLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountLogService]
    });
  });

  it('should be created', inject([AccountLogService], (service: AccountLogService) => {
    expect(service).toBeTruthy();
  }));
});
