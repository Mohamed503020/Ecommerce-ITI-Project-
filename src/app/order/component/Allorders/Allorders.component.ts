import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllOrdersService } from '../../allOrders.service';
import { Order } from '../../Order';

@Component({
  selector: 'app-Allorders',
  templateUrl: './Allorders.component.html',
  styleUrls: ['./Allorders.component.css']
})
export class AllordersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderServ:AllOrdersService) { }
  getOrders(){
    this.orderServ.getAllOrders().subscribe({
      next:(res)=>{
        this.orders=res;
        // console.log(this.orders);
        
  
      }
    })
   }
  ngOnInit() {
    this.getOrders();
  }

}
