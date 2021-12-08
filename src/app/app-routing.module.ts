import { OrdersComponent } from './admin/orders/orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
{path:'home',
 component:HomeComponent},
 {path:'myorder',
 component:CheckOutComponent},
 {path:'products',
 component:ProductsComponent},
 {path:'checkout',
 component:CheckOutComponent},
 {path:'login',
 component:LoginComponent},
 {path:'cart',
 component:ShoppingCartComponent},
 {path:'success',
 component:OrderSuccessComponent},
 {path:'admin/products',
 component:AdminProductsComponent},
 {path:'admin/orders',
 component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
