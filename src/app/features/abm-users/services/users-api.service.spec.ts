import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UsersApiService, url } from './users-api.service';
import { MOCK_GET_USERS } from '../mock/MOCK_GET_USERS';
import { IUsersApi, IUsers } from '../models/user.interface';
import { MOCK_USERS } from '../mock/MOCK_USERS';

describe('UsersApiService', () => {
  let service: UsersApiService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersApiService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    const mock: IUsersApi[] = MOCK_GET_USERS;

    service.getUsers();

    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });

  it('should adapt IUsersApi to IUsers', () => {
    const mock: IUsersApi[] = MOCK_GET_USERS;
    const mockAdapted: IUsers[] = MOCK_USERS;

    const adapter = service['_adapter'];
    const res = adapter(mock);

    expect(res).toEqual(mockAdapted);
  });

  it('get users with error should call throwError', () => {
    const mock: IUsersApi[] = MOCK_GET_USERS;

    service.getUsers();

    const req = controller.expectOne(url);
    req.error(new ProgressEvent('error'));

    expect(req.request.method).toEqual('GET');
  });

  it('getUsers should call adapter', () => {
    const mock: IUsersApi[] = MOCK_GET_USERS;

    const spy = spyOn(service as any, '_adapter');

    service.getUsers();

    const req = controller.expectOne(url);
    req.flush(mock);

    expect(spy).toHaveBeenCalled();
  });

  it('_saveUsers should call function saveUsers from store', () => {
    const mock: IUsers[] = MOCK_USERS;

    const spy = spyOn(service['store'], 'saveUsers');

    service.getUsers();

    const req = controller.expectOne(url);
    req.flush(mock);

    expect(spy).toHaveBeenCalled();
  });

  it('getUsers should call setUsers in the store', () => {
    const mock: IUsersApi[] = MOCK_GET_USERS;

    const spy = spyOn(service as any, '_saveUsers');

    service.getUsers();

    const req = controller.expectOne(url);
    req.flush(mock);

    expect(spy).toHaveBeenCalled();
  });
});
