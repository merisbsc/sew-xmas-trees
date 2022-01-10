import { TestBed } from '@angular/core/testing';

import { SellDateService } from './sell-date.service';

describe('SellDateService', () => {
  let service: SellDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
