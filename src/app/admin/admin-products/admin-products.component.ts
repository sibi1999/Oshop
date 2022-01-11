import { Product } from './../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {


dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();

 products:Product[]=[];
 filteredProducts:Product[]=[];
 subscription: Subscription= new Subscription;
  constructor(private productService:ProductService) {
    this.subscription=this.productService.getAll().subscribe(
      (data:any)=>{
        console.log('data',data);
        this.products=data;
        this.filteredProducts=this.products;
        this.dtTrigger.next();
      }
    );
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }

  filterProducts(query:string)
  {

    // console.log(query);
    this.filteredProducts=query? this.products.filter((product)=>product.title.toLowerCase().includes(query.toLowerCase())):this.products;
  }


  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
