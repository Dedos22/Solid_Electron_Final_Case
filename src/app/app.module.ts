import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { anasayfaComponent } from './anasayfa/anasayfa.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { headerComponent } from './header/header.component';
import { loginComponent } from './login/login.component';
import { navbarComponent } from './navbar/navbar.component';

import { productComponent } from './product/product.component';
import { productdetayComponent } from './productdetay/productdetay.component';
import { signupComponent } from './signup/signup.component';
import { ToDoComponent } from './category/todo.component';
import { FilterPipe } from './productfilterr/filter.pipe';
import { aboutComponent } from './about/about.component';
import { siparişComponent } from './sipariş/sipariş.component';
import { AlertifyService } from './services/alertify.service';
import { AuthGuard } from './services/auth.guards';








@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    navbarComponent,
    
    loginComponent,
    anasayfaComponent,
    productComponent,
    productdetayComponent,
    signupComponent,
    CartComponent,
 
    headerComponent,
      FilterPipe,
      aboutComponent,
      siparişComponent,
      


    
 
  
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
    


  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
