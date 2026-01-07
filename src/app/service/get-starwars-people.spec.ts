import { TestBed } from '@angular/core/testing';

import { GetStarwarsPeople } from './get-starwars-people';

describe('GetStarwarsPeople', () => {
  let service: GetStarwarsPeople;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStarwarsPeople);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
