import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './../models/login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SignUpViewModel } from './../models/sign-up-view-model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient: HttpClient | null = null;
  constructor(
    private httpBackend: HttpBackend,
    private jwtHelperService: JwtHelperService
  ) {}

  currentUserName: any = null;
  currentUserRole: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response =>
      {
        if (response)
        {
          this.currentUserName = response.body.userName;
          this.currentUserRole = response.body.role;
          sessionStorage['currentUser'] = JSON.stringify(response.body);
          sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
        }
        return response.body;
      }));
  }

  public detectIfAlreadyLoggedIn()
  {
    if (this.jwtHelperService.isTokenExpired() == false)
    {
      var currentUser = JSON.parse(sessionStorage['currentUser']);
      this.currentUserName = currentUser.userName;
      this.currentUserRole = currentUser.role;
    }
  }

  public Register(signUpViewModel: SignUpViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("/register", signUpViewModel, { responseType: "json", observe: "response" })
      .pipe(map(response =>
      {
        if (response)
        {
          this.currentUserName = response.body.userName;
          sessionStorage['currentUser'] = JSON.stringify(response.body);
          sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
        }
        return response.body;
      }));
  }

  getUserByEmail(Email: string): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.get<any>("/api/getUserByEmail/" + Email, { responseType: "json" });
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public isAuthenticated(): boolean
  {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as string).token : null;
    if (this.jwtHelperService.isTokenExpired())
    {
      return false; //token is not valid
    }
    else
    {
      return true; //token is valid
    }
  }
  public getAllEmployes(): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.get<any>("/api/getallemployees", { responseType: "json" });
  }
}
