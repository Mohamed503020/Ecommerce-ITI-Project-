import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  productsWishlist: any[] = [];

  constructor() {
    const storedProducts = localStorage.getItem('wishlist');
  if(storedProducts){
this.productsWishlist=JSON.parse(storedProducts)
  }
    // this.products.push(...products);
  }

  getwishlistItems() {
    return this.productsWishlist;
  }

  addProduct(product: any) {
    const existingItem = this.productsWishlist.find(item => item.id === product.id);
    if (existingItem) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Product already exists in the wishlisty ',
        showConfirmButton: false,
        timer: 2500
      })
      return;
    }
    this.productsWishlist.push(product);
    this.saveProducInWishList()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product Add  to  the wishlisty succefully  ',
      showConfirmButton: false,
      timer: 2500
    })
  }

  saveProducInWishList(){
    localStorage.setItem('wishlist', JSON.stringify(this.productsWishlist));

  }
  removeProduct(product: any) {
    const index = this.productsWishlist.indexOf(product);
    if (index !== -1) {
      this.productsWishlist.splice(index, 1);
      this.saveProducInWishList()
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product remove  to  the wishlisty succefully  ',
      showConfirmButton: false,
      timer: 2500
    })
  }

  clearWishlist() {
    this.productsWishlist = [];
    localStorage.removeItem('wishlist');
  }
}
