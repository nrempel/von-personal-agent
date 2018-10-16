import { Component, ViewChild } from "@angular/core";

import { ZXingScannerComponent } from "@zxing/ngx-scanner";
import { Result } from "@zxing/library";

@Component({
  selector: "app-scanner",
  templateUrl: "scanner.page.html",
  styleUrls: ["scanner.page.scss"]
})
export class ScannerPage {
  @ViewChild("scanner")
  scanner: ZXingScannerComponent;

  SUPPORTED_FORMATED = ["QR_CODE"];

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  device: MediaDeviceInfo;

  constructor() {}

  ionViewDidEnter() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      // selects the devices's back camera by default
      for (const device of devices) {
        if (/back|rear|environment/gi.test(device.label)) {
          this.scanner.changeDevice(device);
          this.device = device;
          break;
        }
      }
    });
    this.scanner.camerasNotFound.subscribe(() => (this.hasDevices = false));
    this.scanner.scanComplete.subscribe(
      (result: Result) => (this.qrResult = result)
    );
    this.scanner.permissionResponse.subscribe(
      (perm: boolean) => (this.hasPermission = perm)
    );
  }

  handleQrCodeResult(resultString: string) {
    console.debug("Result: ", resultString);
    this.qrResultString = resultString;

    const result = window.confirm(resultString)
    console.log(result)
  }
}
