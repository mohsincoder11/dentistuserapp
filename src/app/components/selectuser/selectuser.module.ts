import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectuserPageRoutingModule } from './selectuser-routing.module';

import { SelectuserPage } from './selectuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectuserPageRoutingModule
  ],
  declarations: [SelectuserPage]
})
export class SelectuserPageModule {}
