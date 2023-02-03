import { Injectable } from '@angular/core';
import { Store } from './base/Store.base';
import { IUsers } from '../features/abm-users/models/user.interface';

export interface IUsersState {
  users: IUsers[];
}

const initialState = {
  users: [],
};

@Injectable({
  providedIn: 'root',
})
export class StoreGlobalService extends Store<IUsersState> {
  constructor() {
    super(initialState);
  }

  public saveUsers(users: IUsers[]): void {
    this.setState({ users });
  }

  public deleteUser(id: number): void {
    const users = this.currentStateValue.users.filter((user) => user.id !== id);
    this.setState({ users });
  }
}
