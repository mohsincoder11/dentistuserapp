import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatedoctorPage } from './ratedoctor.page';

const routes: Routes = [
  {
    path: '',
    component: RatedoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatedoctorPageRoutingModule {}
