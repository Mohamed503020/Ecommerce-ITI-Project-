import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from './services/order.service';
 interface Order{
  id: number;
  name:string,
  mobile:string,
  payment_status:string,
  order_products: {
    id: number;
    order_id: number,
    product_id: number,
    quantity: number,
    price: number,
    product: {
      id: number;
      name: string;
      description: string,
      rate: number,
      price: number,
      quantity: number,
      status: string,
      discount: number,
      category_id: number
      images:{
        imgPath:string,
      }[]
    }
  }[];
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent implements OnInit{
  now = new Date();
  twoDaysAfter: any;
  orders: Order = {} as Order;
  constructor(private http: HttpClient,private orderService:OrderService){

  }
  
  ngOnInit(): void {
    this.twoDaysAfter = new Date(
      this.now.setDate(this.now.getDate() + 3)
    );
  this.orderService.getOrder().subscribe({
    next:(res)=>{
      this.orders=res;
      console.log(this.orders);
      

    }
   })

  


 
  }
   

}