import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) { }

  sendMessage(
    firstname:any,
    lastname:any,
    email:any,
    message:any): Observable<any>{
    
   return this._HttpClient.post<any>(
    "http://localhost:8000/api/messages",
    {
    "userName":`${firstname} ${lastname}`,
    "userEmail":email,
    "userMessage":message,
    });
  }
}
