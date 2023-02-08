import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  finalize,
  map,
  pipe,
  throwError,
  of,
} from 'rxjs';
import { IUsersApi, IUsers } from '../models/user.interface';
import { StoreGlobalService } from 'src/app/core/store-global.service';

export const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient, private store: StoreGlobalService) {}

  public getUsers(): void {
    const sub = this.http.get<IUsersApi[]>(url).subscribe({
      next: (users) => {
        const usersAdapted = this._adapter(users);
        this._saveUsers(usersAdapted);
      },
      error: (err) => {
        console.log('err', err);
        this._saveUsers([]);
        return;
      },
      complete: () => {
        sub.unsubscribe();
      },
    });
  }

  private _saveUsers(users: IUsers[]): void {
    this.store.saveUsers(users);
  }

  private _adapter(users: IUsersApi[]): IUsers[] {
    return users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });
  }
}
