import { Component } from "@angular/core";

import { NavController } from "@ionic/angular";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"]
})
export class LoginPage {
  constructor(
    public authService: AuthService,
    private navCtrl: NavController
  ) {}

  login(username) {
    this.authService.login(username).subscribe(did => {
      this.navCtrl.navigateRoot("");
    });
  }
}
