import { CategoryService } from './../services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Product[]=[];
categories:any[]=[];
  constructor(productService:ProductService,categoryService:CategoryService) {
  productService.getAll().subscribe((data)=>this.products=data);
  categoryService.getCategories().subscribe((data)=>this.categories=data);
  }

  ngOnInit(): void {
  }




}
