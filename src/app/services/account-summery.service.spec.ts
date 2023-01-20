import { TestBed } from '@angular/core/testing';

import { AccountSummeryService } from './account-summery.service';

describe('AccountSummeryService', () => {
  let service: AccountSummeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountSummeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
