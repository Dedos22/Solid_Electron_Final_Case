import { HttpClient } from "@angular/common/http";
import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";

import { ApiService } from "../services/api.service";
import { CartService } from "../services/cart.service";



@Component({
selector:'product',
templateUrl:'./product.component.html',
styleUrls:['./product.component.css'],


})
export class productComponent implements OnInit {
  [x: string]: any; 
 public title:any="ANASAYFA";
  public productList:any;
   searchword:string=" ";
categoryname:any="";
public searchTerm:string='';
  constructor(private api:ApiService,private cart:CartService,private activateRoute:ActivatedRoute,private alertify:AlertifyService,private http:HttpClient){}

  
  ngOnInit():void{
  
    
     this.activateRoute.params.subscribe(params=>{//parametre tuttuk ve parametreyi service yolladık
     
      this.api.getProduct(params["categoryname"]).subscribe(data=>{
        console.log(params["categoryname"]);
        this.categoryname=params["categoryname"];
        this.productList=data;


      
      });
     })




    
    this.cart.search.subscribe(val=>{
      this.searchword=val;
    });



  }


//apply(product: { productname: string; }) {
//  this.alertify.success("Sepetinize eklendi: " + product.productname);
// }
SepeteEkle(product:any){
  console.log(product);
       this.api.AddSepetProduct(product);
      
       this.alertify.success("Sepete"+ product.productname+ "Eklendi")
} 

 search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cart.search.next(this.searchTerm);
}


 
 }
  

 

 






