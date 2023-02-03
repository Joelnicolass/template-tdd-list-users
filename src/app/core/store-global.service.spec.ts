import { TestBed } from '@angular/core/testing';

import { StoreGlobalService } from './store-global.service';
import { MOCK_USERS } from '../features/abm-users/mock/MOCK_USERS';

describe('StoreGlobalService', () => {
  let service: StoreGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initialState', () => {
    expect(service.currentStateValue).toEqual({ users: [] });
  });

  it('should update state with list of users', () => {
    const mock = MOCK_USERS;

    const sv = service as any;
    sv.saveUsers(mock);

    expect(service.currentStateValue).toEqual({ users: mock });
  });

  it('should delete user from state', () => {
    const mock = MOCK_USERS;
    const sv = service as any;
    sv.saveUsers(mock);

    sv.deleteUser(mock[0].id);

    expect(service.currentStateValue.users.length).toBe(mock.length - 1);
  });
});
