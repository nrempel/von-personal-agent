import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  fetching = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    this.fetching = true;
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = true)),
      tap(() => (this.fetching = false))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
