import { Component } from "@angular/core";

import { NavController } from "@ionic/angular";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-my-credentials",
  templateUrl: "my-credentials.page.html",
  styleUrls: ["my-credentials.page.scss"]
})
export class MyCredentialsPage {
  constructor(
    public authService: AuthService,
    private navCtrl: NavController
  ) {}

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot("/login");
  }
}
