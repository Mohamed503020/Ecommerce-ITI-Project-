import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from 'src/app/product/model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartItems = new BehaviorSubject<any[]>([]);
  constructor(private _HttpClient: HttpClient) {}

  ngOnInit(): void {}

  getAllCartPrd(): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._HttpClient.get<any>(
      'http://localhost:8000/api/users/showUserCard',
      httpOptions
    );
  }

  AddItemCart(id: any): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._HttpClient.post<any>(
      'http://localhost:8000/api/users/addToCart',
      {
        product_id: id,
      },
      httpOptions
    );
  }
  DeleteItemCart(id: any): Observable<any> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._HttpClient.delete<any>(
      `http://localhost:8000/api/users/deleteFromCart/${id}`,
      httpOptions
    );
  }
  increaseQuantitiy(id: any): Observable<any> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._HttpClient.post<any>(
      `http://localhost:8000/api/users/increaseQuantity`,
      {
        product_id: id,
      },
      httpOptions
    );
  }

  decreaseQuantitiy(id: any): Observable<any> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this._HttpClient.post<any>(
      `http://localhost:8000/api/users/decreaseQuantity`,
      {
        product_id: id,
      },
      httpOptions
    );
  }
}
