import { Product } from './../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
api='http://localhost:8000/api';
    constructor(private _HttpClient: HttpClient) { }

  getProduct(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._HttpClient.get<Product[]>(`${this.api}/products`,httpOptions)
  }

  getSingleProduct(id: number): Observable<Product> {
    return this._HttpClient.get<Product>(`${this.api}/products/${id}`)
  }

  getProductsByCategory(category: string): Observable<any> {
    return this._HttpClient.post<any>(`http://localhost:8000/api/searchByCatagoryName`,{"category":category})
  }

  getAllCategory():Observable<any>{
    return this._HttpClient.get<any>(`https://dummyjson.com/products/categories`)

  }

}

