import { switchMap } from 'rxjs/operators';
import { CategoryService } from './../services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Product[]=[];
filteredProducts:Product[]=[];
categories:any[]=[];
category:string='';
  constructor(private route: ActivatedRoute,productService:ProductService,categoryService:CategoryService) {
  productService.getAll().pipe(switchMap((data)=>{
    this.products=data;
    return this.route.queryParamMap;})).subscribe((params)=>{
      this.category=params.get('category')!;
      this.filteredProducts=this.category?this.products.filter((product)=>product.category==this.category):this.products;


    });
  categoryService.getCategories().subscribe((data)=>this.categories=data);






  }

  ngOnInit(): void {
  }




}
