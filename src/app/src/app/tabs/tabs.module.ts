import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ScannerPageModule } from '../scanner/scanner.module';
import { MyCredentialsPageModule } from '../my-credentials/my-credentials.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MyCredentialsPageModule,
    ScannerPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
