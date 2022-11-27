import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
    selector:'sipariş',
    templateUrl:'./sipariş.component.html',
    styleUrls:['./sipariş.component.css']
   
    
    })

export class siparişComponent implements OnInit {
    [x: string]: any; 
    public productdetay:any="";
    siparislerim:any="";
   constructor(private activateRoute:ActivatedRoute,private api:ApiService,private alertify:AlertifyService,private cart:CartService,private http:HttpClient){}
    

   
    ngOnInit():void {
        this.api.getSiparis().subscribe(res=>{
            this.siparislerim=res;
          
          });
          
      }
     
   

}