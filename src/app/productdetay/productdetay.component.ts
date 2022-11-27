import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ApiService } from '../services/api.service';


@Component({
    selector:'productdetay',
    templateUrl:'./productdetay.component.html',
    styleUrls:['./productdetay.component.css']
   
    
    })

export class productdetayComponent implements OnInit {
    [x: number]: any; 
    public productdetay:any="";
    deneme:any=""
    id:any=""
   constructor(private activateRoute:ActivatedRoute,private api:ApiService,private alertify:AlertifyService,private http:HttpClient){}
    

   
    ngOnInit():void {
        this.activateRoute.params.subscribe(params=>{//parametre tuttuk ve parametreyi service yolladık
     
            this.api.getProductDetay(params["id"],params["categoryname"]).subscribe(data=>{
              console.log(params["id"]);
              console.log(params["categoryname"]);
              this.deneme=params["categoryname"];
              this.id=params["id"];
              this.productdetay=data;
            });
           })
      
      }

      SepeteEkle(product:any){
        console.log(product);
             this.api.AddSepetProduct(product);
            
             this.alertify.success("Sepete"+ product.productname+ "Eklendi")
      } 

}