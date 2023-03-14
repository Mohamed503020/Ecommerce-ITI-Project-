import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
api='https://dummyjson.com';
    constructor(private _HttpClient: HttpClient) { }

  getProduct(): Observable<any> {
    return this._HttpClient.get<any>('https://dummyjson.com/products')
  }

  getSingleProduct(id: number): Observable<any> {
    return this._HttpClient.get<any>(`${this.api}/products/${id}`)
  }

  getProductsByCategory(category: string): Observable<any> {
    return this._HttpClient.get<any>(`https://dummyjson.com/products/category/${category}`)
  }

}

