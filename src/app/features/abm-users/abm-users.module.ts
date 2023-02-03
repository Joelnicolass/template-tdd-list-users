import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmUsersRoutingModule } from './abm-users-routing.module';
import { ViewAbmUsersComponent } from './view-abm-users/view-abm-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ViewAbmUsersComponent, ListUsersComponent, ButtonsComponent],
  imports: [CommonModule, AbmUsersRoutingModule, SharedModule],
})
export class AbmUsersModule {}
