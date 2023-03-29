import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private _httpClient:HttpClient) { }
  editProfileData(data:any):Observable<any>{
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this._httpClient.post<any>('http://localhost:8000/api/users/update',data,httpOptions)
}
}