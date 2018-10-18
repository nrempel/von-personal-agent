import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  fetching = false;
  redirectUrl: string;

  baseUrl = "http://localhost:7000";

  constructor(private http: HttpClient) {}

  login(username: String): Observable<Object> {
    this.fetching = true;
    return this.http.post(`${this.baseUrl}/login`, { username }).pipe(
      map(result => result['did']),
      tap(() => (this.isLoggedIn = true)),
      tap(() => (this.fetching = false))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
