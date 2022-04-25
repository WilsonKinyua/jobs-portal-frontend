import { TestBed } from '@angular/core/testing';

import { IsUserAuthenticatedGuard } from './is-user-authenticated.guard';

describe('IsUserAuthenticatedGuard', () => {
  let guard: IsUserAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUserAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
