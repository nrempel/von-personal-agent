import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginPage } from "./pages/login/login.page";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./pages/tabs/tabs.module#TabsPageModule",
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginPage,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
