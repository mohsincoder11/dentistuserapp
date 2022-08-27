import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorFromHospitalPageRoutingModule } from './doctor-from-hospital-routing.module';

import { DoctorFromHospitalPage } from './doctor-from-hospital.page';
import { FooterPageModule } from '../footer/footer.module';
import { PipesModule } from '../pipe/truncaterating.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    DoctorFromHospitalPageRoutingModule,
    FooterPageModule
  ],
  declarations: [DoctorFromHospitalPage]
})
export class DoctorFromHospitalPageModule {}
