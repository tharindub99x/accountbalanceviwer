import { TestBed } from '@angular/core/testing';

import { ProcessBudgetFileService } from './process-budget-file.service';

describe('ProcessBudgetFileService', () => {
  let service: ProcessBudgetFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessBudgetFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
