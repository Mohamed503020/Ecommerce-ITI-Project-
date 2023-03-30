import { ProductService } from './../../../product/services/product.service';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'
]
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  params: any;
  searchText:string=""
  constructor(
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _productService: ProductService,
    private router: Router,
    private _authsrv: AuthService
  ) { }
  cartitem: any;
  cartLength = 0;
  wishlistItem: any;
  allproducts: any;
  searchQuery = '';
  searchResults: any;
  categories: any;
  category:string='all'
  logged: boolean = false;
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
    // this.cartLength = localStorage.getItem('cartItemlength')
    this.getAllProductFromCart();
    this.getallcategory();
    this._wishlistService.getAllWishlist().subscribe({
      next: (data) => {
        this.wishlistItem = data
      }
    });
    //  this.cartitem= this._cartService.getCartItems()
    //  this.getCategires()
    if (localStorage.getItem('user')) {
      this.logged = true
    }
    else { this.logged = false }
  }
  // selectCategory() {
  //   if (this.searchQuery) {
  //     const query = this.searchQuery.toLowerCase();
  //     this.categories = this.categories.
  //       filter((cat: { name: string; }) => cat.name.toLowerCase().includes(query));
  //   }
  // }



  selectCategory(cate: string) {
    console.log(cate)
    if (cate === 'all') {
      this.router.navigateByUrl('/main/products');
    } else {
      this.router.navigateByUrl(`/main/products/productcategory/${cate}`);
    }
  }

  getAllProductFromCart() {
    this._cartService.getAllCartPrd().subscribe({
      next: (res) => {
        this.cartitem = res;

      },error:error=>{alert(error.message)}
    })
  }

  getallcategory() {
    this._productService.getAllCategory().subscribe({
      next: (res) => {
        this.categories = res;
      },error:error=>{alert(error.message)}
    })
  }
searchProduct(seerchTxt:string){
  this.router.navigateByUrl(`/main/products/search/${seerchTxt}`);

}
  logout() {
    this._authsrv.islogin.next(false);

  }
  // searchProducts() {
  //   if (this.searchQuery.length > 0) {
  //     this._productService.getProduct().subscribe((data) => {
  //       this.searchResults = data.filter((product:any) => {
  //         return product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
  //       });
  //       const state = { myData: this.searchResults };
  //       const extras: NavigationExtras = { state };
  //       this.router.navigate(['/main/products/search'], );
  //     });
  //   } else {
  //     this.searchResults = [];
  //   }
  // }

  // getCategires(){
  //   this._productService.getAllCategory().subscribe({
  //     next:data=>{this.categories=data}
  //   })
  // }s


}
