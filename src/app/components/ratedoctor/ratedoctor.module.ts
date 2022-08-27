import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatedoctorPageRoutingModule } from './ratedoctor-routing.module';

import { RatedoctorPage } from './ratedoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatedoctorPageRoutingModule
  ],
  declarations: [RatedoctorPage]
})
export class RatedoctorPageModule {}
