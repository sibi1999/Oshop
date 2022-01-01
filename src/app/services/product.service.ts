import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }


  create(product:any)
  {

    return this.db.list('/products').push(product);

  }

  getAll()
  {
    return this.db.list('/products').snapshotChanges().pipe(
      map((changes:any)=>
        changes.map((p:any) => ({ key: p.payload.key, ...p.payload.val() }))
      )
    );
  }

  getProduct(id:string)
  {
    console.log("in getproduct",id)
    console.log(this.db.object('/products'+id));

    // this.db.object('/products/'+'-MrXlImGFdmNaNVP3jHK').snapshotChanges().subscribe((data)=>{console.log('dkey',data.key);

  return this.db.object('/products/'+id).snapshotChanges()
  }

  updateProduct(productid:string,product:any)
  {

    return this.db.object('/products/'+productid).update(product);
  }

  deleteProduct(productid:string)
  {
    return this.db.object('/products/'+productid).remove()
  }




}
