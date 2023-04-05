import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  products :any[]=[];
  fliterValue:string='Default';
  items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  Loading: boolean = false;
  constructor(private _ProductService:ProductService){}
  ngOnInit(): void {
  this._ProductService.getProduct().subscribe({
    next:(data)=>{
      this.products=data;
      this.Loading=true;
      console.log(data)
    }
  })
  }
}
