import { User } from './../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient:HttpClient
  ) { }

  api="http://localhost:8000/api/users"

  register(data:User):Observable<any>{
    return this._httpClient.post<any>(`${this.api}/register`,data,{
      headers:{accept:"application/json"}
    })
  }
}
