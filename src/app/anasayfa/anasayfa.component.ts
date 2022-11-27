import { HttpClient } from "@angular/common/http";
import { Component,OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";
import { ApiService } from "../services/api.service";
import { CartService } from "../services/cart.service";

@Component({
selector:'anasayfa',
templateUrl:'./anasayfa.component.html',
styleUrls:['./anasayfa.component.css']

})



export class anasayfaComponent implements OnInit{
    [x: string]: any; 
  public allProductList:any="";
  searchTerm:any="";
 public userid:number=0;
   constructor(private api:ApiService,private alertify:AlertifyService,private activateRoute:ActivatedRoute,private cart:CartService,private http:HttpClient){}
   ngOnInit():void{
  

   
    
    this.api.getallProduct().subscribe(data=>{
      this.allProductList=data;
    
    })

  
    }

    SepeteEkle(product:any){
      console.log(product);
           this.api.AddSepetProduct(product);
          
          this.alertify.success("Sepete"+ product.productname+ "Eklendi")
           
    } 
 
   
}