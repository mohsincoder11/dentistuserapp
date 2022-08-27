import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreataccountPage } from './creataccount.page';

const routes: Routes = [
  {
    path: '',
    component: CreataccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreataccountPageRoutingModule {}
