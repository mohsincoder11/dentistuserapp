import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreataccountPageRoutingModule } from './creataccount-routing.module';

import { CreataccountPage } from './creataccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreataccountPageRoutingModule
  ],
  declarations: [CreataccountPage]
})
export class CreataccountPageModule {}
