import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

constructor(private http: HttpClient) { }


 
 getOrder():Observable<any>{
  const token = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  };

 return this.http.get<any>('http://localhost:8000/api/users/getOrderDetails',httpOptions);
 }


}
