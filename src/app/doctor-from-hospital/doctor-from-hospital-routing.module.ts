import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorFromHospitalPage } from './doctor-from-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorFromHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorFromHospitalPageRoutingModule {}
