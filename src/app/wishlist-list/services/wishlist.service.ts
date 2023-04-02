import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor(private _HttpClient:HttpClient) {

  
  }
  getAllWishlist(): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this._HttpClient.get<any>("http://localhost:8000/api/users/showFavorite", httpOptions);
  }

  AddItemWishlist(id:any): Observable<any>{
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
   return this._HttpClient.post<any>("http://localhost:8000/api/users/addToFavorite",{
      "product_id":id
  },httpOptions
    ).pipe(retry(2));
  }
  DeleteItemWishlist(id: any): Observable<any>{
    const token = localStorage.getItem('token');
    console.log(token);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this._HttpClient.delete<any>(`http://localhost:8000/api/users/deleteFromFavorite/${id}`, httpOptions);
  }
}
// productsWishlist: any[] = [];
 
// constractor
    // const storedProducts = localStorage.getItem('wishlist');
  // if(storedProducts){
// this.productsWishlist=JSON.parse(storedProducts)


 // this.products.push(...products);
  // }

  // getwishlistItems() {
  //   return this.productsWishlist;
  // }

  // addProduct(product: any) {
  //   const existingItem = this.productsWishlist.find(item => item.id === product.id);
  //   if (existingItem) {
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'error',
  //       title: 'Product already exists in the wishlisty ',
  //       showConfirmButton: false,
  //       timer: 2500
  //     })
  //     return;
  //   }
  //   this.productsWishlist.push(product);
  //   this.saveProducInWishList()
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Product Add  to  the wishlisty succefully  ',
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  // }

  // saveProducInWishList(){
  //   localStorage.setItem('wishlist', JSON.stringify(this.productsWishlist));

  // }
  // removeProduct(product: any) {
  //   const index = this.productsWishlist.indexOf(product);
  //   if (index !== -1) {
  //     this.productsWishlist.splice(index, 1);
  //     this.saveProducInWishList()
  //   }
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Product remove  to  the wishlisty succefully  ',
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  // }

  // clearWishlist() {
  //   this.productsWishlist = [];
  //   localStorage.removeItem('wishlist');
  // }