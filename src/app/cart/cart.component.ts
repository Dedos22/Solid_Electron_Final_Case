
import { Component,OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

import { ApiService } from '../services/api.service';




@Component({
selector:'cart',
templateUrl:'./cart.component.html',
styleUrls:['./cart.component.css']

})


export class CartComponent implements OnInit {
  [x: string]: any; 
    public Products: any="" ;
  public  buyproduct:any=""
    constructor(private api : ApiService,private alertify:AlertifyService) { }
  
    ngOnInit(): void {
      this.api.getSepet().subscribe(data=>{
       this.Products=data;
       console.log(this.Products);
      

      })
  
 
     
    }
    delete(product:any){
      let productid:any=product.id;
           this.api.deleteSepetProduct(productid);
           this.buyproduct=product;
           console.log(this.buyproduct)
           console.log(productid)
           this.alertify.warning(product.productname+"Ürün sepetten Silindi")
    }
   siparis(product:any){
    this.api.siparisler(product);
  
    this.alertify.warning("Siparişiniz alındı.Siparişlerim bölümünden kontrol edebilirsiniz.")
   }

    
  
  }