import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$!:Observable<any[]> ;
  categories:any;
  product:any={};
  id:string | null='';
  showActions:boolean=false;

  constructor(private category:CategoryService,private productService:ProductService,
              private route:ActivatedRoute,private router:Router) {
   this.category.getCategories().subscribe((data)=>{
    this.categories=data;
    console.log('data',this.categories);
   })

  this.id=this.route.snapshot.paramMap.get('id')
   if(this.id)
   {
     this.productService.getProduct(this.id).subscribe((p:any)=>{this.product=p.payload.val(),
      console.log('product received',this.product);
    });
   }
  }


  save(product:any)
  {
    if(this.id)
    {
      this.productService.updateProduct(this.id,product);
    }
    else
    {
    this.productService.create(product);
    }
    this.router.navigate(['admin/products']);

  }

  deleteProduct()
  {
    if(!(this.id===null) && confirm("Are you sure?"))
    {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['admin/products']);
    }

  }




  ngOnInit(): void {
  }

}
