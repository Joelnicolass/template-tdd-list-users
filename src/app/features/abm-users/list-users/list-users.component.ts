import { Component, Input } from '@angular/core';
import { IUsers } from '../models/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  @Input() users: IUsers[] = [];
  @Input() deleteUser = (id: number) => {};

  constructor() {}
}
