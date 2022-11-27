import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AlertifyService } from '../services/alertify.service';
import { CartService } from '../services/cart.service';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
    
    })

export class loginComponent implements OnInit {
    public loginForm !: FormGroup; //login ile form içindeki inputları çekiyoruz
    public userid:any;
    constructor(private formBuilder :FormBuilder,private http :HttpClient,private router:Router,private api:ApiService,private alertify:AlertifyService ,private cart:CartService){}

    ngOnInit(): void {
        // ...
        this.loginForm=this.formBuilder.group({
            email:[' '],
            password:[' ']

        })
      
      }

      login(){

        this.api.getUser(this.loginForm);
       
      }

    
  
            
             
      
}






