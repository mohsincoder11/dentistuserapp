import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifymobilePage } from './verifymobile.page';

const routes: Routes = [
  {
    path: '',
    component: VerifymobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifymobilePageRoutingModule {}
