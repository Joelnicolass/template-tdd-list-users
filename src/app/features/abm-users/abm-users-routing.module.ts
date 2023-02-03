import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAbmUsersComponent } from './view-abm-users/view-abm-users.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAbmUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbmUsersRoutingModule {}
