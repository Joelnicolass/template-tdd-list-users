import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ViewAbmUsersComponent } from './view-abm-users.component';
import { StoreGlobalService } from '../../../core/store-global.service';
import { UsersApiService } from '../services/users-api.service';
import { IUsers } from '../models/user.interface';
import { ListUsersComponent } from '../list-users/list-users.component';
import { MOCK_GET_USERS } from '../mock/MOCK_GET_USERS';
import { CardComponent } from '../../../shared/card/card.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { By } from '@angular/platform-browser';

const MOCK_STORE_SERVICE = {
  suscribeOnly: (key: string) => {
    return of(MOCK_GET_USERS);
  },
  deleteUser: (id: number) => {
    const newValues = MOCK_GET_USERS.filter((user) => user.id !== id);
    return of(newValues);
  },
};

const MOCK_USERS_API_SERVICE = {
  getUsers: () => {
    return of(MOCK_GET_USERS);
  },
};

describe('ViewAbmUsersComponent', () => {
  let component: ViewAbmUsersComponent;
  let fixture: ComponentFixture<ViewAbmUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewAbmUsersComponent,
        ListUsersComponent,
        CardComponent,
        ButtonsComponent,
      ],
      providers: [
        { provide: StoreGlobalService, useValue: MOCK_STORE_SERVICE },
        { provide: UsersApiService, useValue: MOCK_USERS_API_SERVICE },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAbmUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a instance of Observable<IUsers[]>', () => {
    const comp = component as any;
    expect(comp.users$).toBeInstanceOf(Observable<IUsers>);
  });

  it('should call getUsers', () => {
    const comp = component as any;
    const spy = spyOn(comp.usersApiService, 'getUsers');
    comp.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
