import { Component } from "@angular/core";

import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";

@Component({
  selector: "app-scanner",
  templateUrl: "scanner.page.html",
  styleUrls: ["scanner.page.scss"]
})
export class ScannerPage {
  constructor(private qrScanner: QRScanner) {
    console.log("asd");
    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log("Scanned something", text);

      this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
    });
  }
}
