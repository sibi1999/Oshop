import { CategoryService } from './../../services/category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories:any[]=[];
  @Input() category!:string;
  constructor(categoryService:CategoryService) {
    categoryService.getCategories().subscribe((data)=>this.categories=data);

  }

  ngOnInit(): void {
  }


}
