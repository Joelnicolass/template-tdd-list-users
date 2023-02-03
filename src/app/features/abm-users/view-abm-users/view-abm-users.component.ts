import { Component } from '@angular/core';
import {
  StoreGlobalService,
  IUsersState,
} from '../../../core/store-global.service';
import { Observable, Subscription } from 'rxjs';
import { IUsers } from '../models/user.interface';
import { UsersApiService } from '../services/users-api.service';

@Component({
  selector: 'app-view-abm-users',
  templateUrl: './view-abm-users.component.html',
  styleUrls: ['./view-abm-users.component.css'],
})
export class ViewAbmUsersComponent {
  users$: Observable<IUsers[]>;
  public deleteUser = (id: number) => this.store.deleteUser(id);

  constructor(
    public store: StoreGlobalService,
    private usersApiService: UsersApiService
  ) {
    this.users$ = this.store.suscribeOnly('users');
  }

  ngOnInit(): void {
    this.usersApiService.getUsers();
  }
}
