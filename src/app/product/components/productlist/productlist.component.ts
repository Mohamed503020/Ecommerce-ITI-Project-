import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  products :any[]=[]
  constructor(private _ProductService:ProductService){}
  ngOnInit(): void {
  this._ProductService.getProduct().subscribe({
    next:(data)=>{
      this.products=data
    }
  })
  }
}
