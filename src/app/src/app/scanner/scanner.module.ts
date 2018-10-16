import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScannerPage } from './scanner.page';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ScannerPage }])
  ],
  declarations: [ScannerPage],
  providers: [
    QRScanner
  ]
})
export class ScannerPageModule {}
