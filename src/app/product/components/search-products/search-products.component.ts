import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  searchResults:any|undefined;

constructor(
private _activeRouter:Router
){

}
  ngOnInit(): void {
    this._activeRouter.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const state = this._activeRouter.getCurrentNavigation()?.extras.state;
        this.searchResults=state?.['myData']
        console.log(this.searchResults)
      }
    });
  }
}
