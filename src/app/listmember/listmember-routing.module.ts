import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListmemberPage } from './listmember.page';

const routes: Routes = [
  {
    path: '',
    component: ListmemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmemberPageRoutingModule {}
