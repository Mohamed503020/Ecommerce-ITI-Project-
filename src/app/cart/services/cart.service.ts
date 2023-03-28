import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import Swal from 'sweetalert2';
import { Product } from 'src/app/product/model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  getCartItems(): any { } 
  // getCartItems(): any[] {
  //   throw new Error('Method not implemented.');
  // }
  api = 'http://localhost:8000/api';
  constructor(private _HttpClient: HttpClient) { }
  ngOnInit(): void {}

  // getaddProductTocart(): Observable<any[]> {
  //   return this._HttpClient.get<any[]>("http://localhost:8000/api/users/addToCart")
  // }

  addProductfromcart(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };

    return this._HttpClient.post<any>(`http://localhost:8000/api/users/addToCart`,
      {
        "product_id": id
      }, httpOptions);
  }

  getproductfromcart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this._HttpClient.get<any>(`http://localhost:8000/api/users/showUserCard`,
    
    httpOptions)
  }
  DeleteProductfromcart(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
    
    return this._HttpClient.post<any>(`http://localhost:8000/api/users/deleteFromCart/${id}`,
      {
        
      }, httpOptions);
  }

 
    
    // return this._HttpClient.get<number>(this.api + '/count');
  


  // this._HttpClient.post<any>("http://localhost:8000/api/users/deleteFromCart", id)


  // addToCart(product: Product) {
  //   throw new Error('Method not implemented.');
  // }


  // cartItems: any[] = [];
  // constructor(private _toast:HotToastService) {
  //   const storedItems = localStorage.getItem('cartItems');
  //   if (storedItems) {
  //     this.cartItems = JSON.parse(storedItems);
  //   }
  // }
  // ngOnInit(): void {
  //   this.getTotalPrice()
  // }

  // getCartItems() {
  //   return this.cartItems;
  // }
  // البرودكت ديتيلز هحط فيها الفانكشن اللي تخليني اروخ ع الكارت
  //الكارت هعرض فيها وهحذف فيها


  // addProductToCart(product: any) {
  //   const existingItem = this.cartItems.find(item => item.id === product.id);
  //   if (existingItem) {
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'error',
  //       title: 'product existed in Cart',
  //       showConfirmButton: false,
  //       timer: 2500
  //     })
  //   } else {
  //     const newItem = {
  //       id: product.id,
  //       title: product.title,
  //       image: product.image,
  //       price: product.price,
  //       quantity: 1,
  //       category: product.category,
  //       totalPrice: product.price,
  //       images: product.images
  //     };
  //     this.cartItems.push(newItem);
  //     this.saveCartItems();
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Product Add To Cart Succefully ',
  //       showConfirmButton: false,
  //       timer: 2500
  //     })
  //   }
  // }

  // removeProductFromCart(item: any) {
  //   const index = this.cartItems.indexOf(item);
  //   if (index >= 0) {
  //     this.cartItems.splice(index, 1);
  //     this.saveCartItems();
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Product remove form Cart Succefully',
  //       showConfirmButton: false,
  //       timer: 2500
  //     })
  //   }

  // }

  // increaseQuantity(item: any) {
  //   item.quantity++;
  //   item.totalPrice = item.price * item.quantity;
  //   this.saveCartItems();
  // }

//   decreaseQuantity(item: any) {
//     if (item.quantity > 1) {
//       item.quantity--;
//       item.totalPrice = item.price * item.quantity;
//       this.saveCartItems();
//     }
//   }

//   private saveCartItems() {
//     localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
//   }
//   getTotalPrice() {
//     let totalPrice = 0;
//     this.cartItems.forEach((product) => {
//       totalPrice += product.totalPrice;
//     });
//     return totalPrice;
//   }


}
