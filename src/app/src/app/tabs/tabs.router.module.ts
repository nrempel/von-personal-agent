import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { MyCredentialsPage } from '../my-credentials/my-credentials.page';
import { ScannerPage } from '../scanner/scanner.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(my-credentials:my-credentials)',
        pathMatch: 'full',
      },
      {
        path: 'my-credentials',
        outlet: 'my-credentials',
        component: MyCredentialsPage
      },
      {
        path: 'scanner',
        outlet: 'scanner',
        component: ScannerPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(my-credentials:my-credentials)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
