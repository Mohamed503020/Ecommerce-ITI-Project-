import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {
  
  route="Wishlist"
  productInWhislis:any;
  constructor(
    private _wishlisService:WishlistService,
    private _cartService:CartService
    ){

  }

  ngOnInit(): void {

    this.getProductFromWishlist();
    console.log(this.productInWhislis);
  }

  getProductFromWishlist(){
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

  addProductToCart(product:any){
    // this._cartService.addProductToCart(product.id)
  }

  removeProductFromWishlist(productId: any){
    this._wishlisService.DeleteItemWishlist(productId).subscribe({
      next:(res)=>{
        console.log(res);
        console.log("done");
        this.getProductFromWishlist();
        
      },
      error:(err)=>{
        console.log(err);
        console.log("errrrrrrrrrrrrrrrreoroo");
        this.getProductFromWishlist();        
      }
      
    })
  }

}
