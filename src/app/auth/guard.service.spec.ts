import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';

describe('AuthGuard', () => {
  let guard: GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
