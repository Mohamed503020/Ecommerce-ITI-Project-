import { User } from './../model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { NonNullAssert } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogin: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(
    private _httpClient: HttpClient) { }

  api = "http://localhost:8000/api/users"


  forgotPassword(email: string) {
    return this._httpClient.post<string>(`http://localhost:8000/api/users/forgetPassword`, {
      "email": email
    }, {
      headers: new HttpHeaders({
        Accept: "application/json"
      })
    })
    // return this._httpClient.post('http://localhost:8000/api/users/forgetPassword', { email });
  }
  //

  resetPassword(data:any) {
    return this._httpClient.post('http://localhost:8000/api/users/resetPassword',data, {
      headers: new HttpHeaders({
        Accept: "application/json"
      })
    })
  }

  //
  register(data: any): Observable<any> {

    return this._httpClient.post<any>(`http://localhost:8000/api/users/register`, data, {
      headers: new HttpHeaders({
        Accept: "application/json"
      })
    })
  }
  login(data: Login): Observable<any> {

    return this._httpClient.post<any>(`http://localhost:8000/api/users/login`, data, {
      headers: new HttpHeaders({
        Accept: "application/json"
      })
    }
    )





    // logout(): Observable<any>{
    //   // call your logout API here and set isLoggedInVar to false
    //   this.islogin.next(false);
    // return  this._httpClient.post('http://localhost:8000/api/users/logout')
    // }
  }

}