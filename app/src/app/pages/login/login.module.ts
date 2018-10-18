import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginPage } from "./login.page";

// import { AuthService } from "../../services/auth.service"

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [LoginPage]
})
export class LoginPageModule {}
