import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { FooterPageModule } from '../footer/footer.module';
import { PipesModule } from '../pipe/truncaterating.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    FooterPageModule,
    PipesModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
