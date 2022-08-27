import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifymobilePageRoutingModule } from './verifymobile-routing.module';

import { VerifymobilePage } from './verifymobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifymobilePageRoutingModule
  ],
  declarations: [VerifymobilePage]
})
export class VerifymobilePageModule {}
