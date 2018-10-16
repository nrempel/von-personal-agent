import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScannerPage } from './scanner.page';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ZXingScannerModule,
    RouterModule.forChild([{ path: '', component: ScannerPage }])
  ],
  declarations: [ScannerPage],
  providers: [
    
  ]
})
export class ScannerPageModule {}
