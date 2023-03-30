import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from 'src/app/product/model/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {
  
  route="Wishlist"
  product!: Product;
  productInWhislis:any;
  constructor(
    private _wishlisService:WishlistService,
    private _CartService: CartService    ){

  }

  ngOnInit(): void {

    this.getProductFromWishlist();
    console.log(this.productInWhislis);
  }

  getProductFromWishlist(){
    if(localStorage.getItem('token')){
      this.productInWhislis=this._wishlisService.getAllWishlist().subscribe({
        next:(res)=>{
          this.productInWhislis=res;
          console.log(this.productInWhislis)
          console.log("result done")
          
        },
        error:(err)=>{
          console.log(err)
          console.log("errorrrrrrrrrrrr")
        }
  
      });
    }
   
  }

  addProductToCart(id:any){
    this._CartService.AddItemCart(id).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product added Succefully ',
          showConfirmButton: false,
          timer: 2500
        })
            },
            error: (err) => {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'product already existed',
                showConfirmButton: false,
                timer: 2500
              })
              console.log(err);
              console.log("errrrrrrrrrror");
            }
    })
  }
  // addProductToWishList(id: any) {
  //   this._WishlistService.AddItemWishlist(id).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       console.log("Done");
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       console.log("errrrrrrrrrror");
  //     }
  //   })

  // }
  removeProductFromWishlist(productId: any){
    this._wishlisService.DeleteItemWishlist(productId).subscribe({
      next:(res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product deleted Succefully ',
          showConfirmButton: false,
          timer: 2500
        })
        console.log(res);
        console.log("done");
        this.getProductFromWishlist();
       
        
      },
      error:(err)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product deleted Succefully ',
          showConfirmButton: false,
          timer: 2500
        })
        console.log(err);
        console.log("errrrrrrrrrrrrrrrreoroo");
        this.getProductFromWishlist();        
      }
      
    })
  }

}
