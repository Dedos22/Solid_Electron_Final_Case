
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';





@Component({
selector:'navbar',
templateUrl:'./navbar.component.html',
styleUrls:['./navbar.component.css']

})


export class navbarComponent implements OnInit  {
    [x: string]: any;
 public productadet:number=0;

 username:any=localStorage.getItem('username');
 
    constructor(private cart:CartService,private api:ApiService,private activateRoute:ActivatedRoute){}
    ngOnInit(): void {
     
 
       

        this.api.getSepet().subscribe(data=>{
           
            this.productadet=data.length;//sepetteki ürün sayısı cart service den aldık
            
        })

       
      

        


    }
    logout(){
        localStorage.setItem('token', "false");
      }
   
}

