import { ProductService } from './../../../product/services/product.service';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import {  Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  params: any;
  category:string='all'
  searchText=''
  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService,
    private _productService:ProductService,
    private router:Router,
    private _authsrv:AuthService
    ){}
   cartitem:any;
   cartLength:any;
   wishlistItem:any;
   allproducts:any;
   searchQuery='';
   searchResults:any;
   categories:any;
   logged:boolean=false;
   cat!: string;

   //header stiky
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 300) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  ngOnInit(): void {
    this.cartLength=localStorage.getItem('cartItemlength')
    this.getAllProductFromCart();
    this.getallcategory();
   this._wishlistService.getAllWishlist().subscribe({
  next:(data)=>{
    this.wishlistItem= data
    this.cat = 'default';
  }
 });
  //  this.cartitem= this._cartService.getCartItems()
  //  this.getCategires()
if(localStorage.getItem('user')){
  this.logged=true
}
else{this.logged=false}
}
// selectCategory(){    if (this.searchQuery) {
//   const query = this.searchQuery.toLowerCase();
//   this.categories = this.categories.filter((cat) => cat.name.toLowerCase().includes(query));
// }ths.getAllCategory();
// }





getAllProductFromCart(){
  this._cartService.getAllCartPrd().subscribe({
    next:(res)=>{
      this.cartitem=res;

    }
  })
}

getallcategory(){
this._productService.getAllCategory().subscribe({
   next:(res)=>{
    this.categories=res;
   }
})
}
selectCategory(cate: string) {
  console.log(cate)
  if (cate === 'all') {
    this.router.navigateByUrl('/main/products');
  } else {
    this.router.navigateByUrl(`/main/products/productcategory/${cate}`);
  }
}
searchProduct(seerchTxt:string){
  this.router.navigateByUrl(`/main/products/search/${seerchTxt}`);

}
logout(){
this._authsrv.islogin.next(false);

}


  getCategires(){
    this._productService.getAllCategory().subscribe({
      next:data=>{this.categories=data}
    })
  }


}
