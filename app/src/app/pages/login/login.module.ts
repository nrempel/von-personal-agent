import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginPageRoutingModule } from './login.router.module';

import { LoginPage } from "./login.page";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, LoginPageRoutingModule],
  declarations: [LoginPage]
})
export class LoginPageModule {}
