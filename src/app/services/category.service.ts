import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getCategories()
  {
    const c=this.db.list('/category');

    const items = c.snapshotChanges().pipe(
      map((changes:any)=>
        changes.map((p:any) => ({ key: p.payload.key, ...p.payload.val() }))
      )
    );

    return items;
  }
}


