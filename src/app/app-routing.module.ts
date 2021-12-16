import { AuthGuardService } from './services/auth-guard.service';
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
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [

  {path:'',
 component:HomeComponent},

 {path:'login',
 component:LoginComponent},


 {path:'products',
 component:ProductsComponent},


 {path:'myorder',
 component:CheckOutComponent,canActivate:[AuthGuardService]},

 {path:'checkout',
 component:CheckOutComponent,
canActivate:[AuthGuardService]},


 {path:'cart',
 component:ShoppingCartComponent,
 canActivate:[AuthGuardService]},

 {path:'success',
 component:OrderSuccessComponent,
 canActivate:[AuthGuardService]},

 {path:'admin/products',
 component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService ]},

 {path:'admin/orders',
 component:OrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
