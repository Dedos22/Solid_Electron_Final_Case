
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {productdetayComponent } from  './productdetay/productdetay.component';
import { navbarComponent } from  './navbar/navbar.component';
import { ToDoComponent } from  './category/todo.component';
import { anasayfaComponent } from  './anasayfa/anasayfa.component';
import { CartComponent } from  './cart/cart.component';
import { AppComponent } from  './app.component';
import { loginComponent } from  './login/login.component';
import { productComponent } from  './product/product.component';
import { signupComponent } from  './signup/signup.component';
import { aboutComponent } from  './about/about.component';
import { siparişComponent } from './sipariş/sipariş.component';
import { AuthGuard } from './services/auth.guards';
const routes: Routes = [
  // Regular Route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: loginComponent }, 
  { path: 'navbar', component: navbarComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'anasayfa', component: anasayfaComponent },//, canActivate:[AuthGuard] 
  { path: 'app', component: AppComponent },
  { path: "product", component: productComponent },//parametre yollama routing ile
  { path: 'signup', component: signupComponent },
  { path: 'cart', component: CartComponent },
  {path:'product/:categoryname',component: productComponent},
  {path:'product/:categoryname/productdetay/:id',component: productdetayComponent},
  { path: 'about', component: aboutComponent },
  { path: 'siparis', component: siparişComponent }

 
];


const appRoutes: Routes = [
     { path: 'login', component: loginComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
 
