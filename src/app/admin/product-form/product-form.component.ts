import { CategoryService } from './../../services/category.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$!:Observable<any[]> ;
  categories:any;
  constructor(private category:CategoryService) {
   this.category.getCategories().subscribe((data)=>{

    this.categories=data;
    console.log('data',this.categories);
   })
  }


  save(product:any)
  {
    

  }




  ngOnInit(): void {
  }

}
