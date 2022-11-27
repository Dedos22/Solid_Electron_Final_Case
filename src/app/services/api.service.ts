import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { AlertifyService } from "./alertify.service";

@Injectable({
    providedIn:"root"
})
export class ApiService{
    ürünfiyat :any=[]
   toplam:any=[]
  userid :any=localStorage.getItem('key');

    constructor(private http :HttpClient,private alertify:AlertifyService,private router:Router){}
    getUser(loginForm:any){//user verilerini çektik
        this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
            const user =res.find((a:any)=>{
                return a.email=== loginForm.value.email && a.password===loginForm.value.password
            });
            if(user){
                
               this.userid=user.id;
               console.log(this.userid)
               this.router.navigateByUrl("/anasayfa")
               this.alertify.success("Hoşgeldiniz"+user.fullname);
               localStorage.setItem('key', user.id)
               localStorage.setItem('username', user.fullname)
               localStorage.setItem('token', "true");
             
               
            }else{
                this.alertify.error("Kullanıcı Bulunamadı...");
                
            }
           }
         ,err=> {
            this.alertify.warning("Bir şeyler yanlış...");
            
        })
    


    }
   

    AddSepetProduct(product:any){
       
        const json = {
           //user id sini eşitliycez.sepetin ona ait olması için userid yi sepetid ye atıyoruz
           sepetid:localStorage.getItem('key'),
            productname: product.productname,
            productprice:product.productprice,
            productcategory:product.productcategory,
            productdetay:product.productdetay,
            productmarka:product.productmarka,
            productimage:product.productimage,
        
            
           
      };
      fetch("http://localhost:3000/sepet", {
        
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          
          body: JSON.stringify(json),
          
      });
      setTimeout(function(){
          
        window.location.reload();
       }, 100);

    }

    getSepetToplam(){
         this.http.get<any>("http://localhost:3000/sepet"+"?sepetid="+localStorage.getItem('key')).pipe(map((data)=>{//sepet veriler +"?sepetid="+1
        this.toplam+=data;
        localStorage.setItem('toplam',this.toplam)
        return this.toplam;
        }))
    }

    siparisler(product:any){//sipariş edilen ürünler veritabanına ekleniyor
       
        const json = {
            //
            sepetid:localStorage.getItem('key'),
            tarih:new Date(),
            productname:product.productname,
            adres:"Lorem ipsum",
           // toplam:localStorage.getItem('toplam'),

          
       };
       fetch("http://localhost:3000/siparislerim", {
         
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           
           body: JSON.stringify(json),
       });
      
       fetch("http://localhost:3000/sepet/"+product.id,{  //sepetten sipariş edilen ürün siliniyor
       method:"DELETE",
       headers:{
           "Content-Type":"app/json"
       }
   })
   .then(response=>console.log(response))
   .then(data=>{
   
   })
        
   setTimeout(function(){
          
            window.location.reload();
           }, 100);

 
     }
       

    

    deleteSepetProduct(productid:any) {
        fetch("http://localhost:3000/sepet/"+productid,{  //
            method:"DELETE",
            headers:{
                "Content-Type":"app/json"
            }
        })
        .then(response=>console.log(response))
        .then(data=>{
        
        })
        setTimeout(function(){
          
            window.location.reload();
           }, 100);
     
      }



  

    getSepet(){
        return this.http.get<any>("http://localhost:3000/sepet"+"?sepetid="+localStorage.getItem('key')).pipe(map((data)=>{//sepet veriler +"?sepetid="+1
        
        return data;
        }))
    }

    getSiparis(){
        return this.http.get<any>("http://localhost:3000/siparislerim"+"?sepetid="+localStorage.getItem('key')).pipe(map((res)=>{
     
        return res;
        }))
    }



   
  
       
      

    getallProduct(){
        return this.http.get<any>("http://localhost:3000/product").pipe(map((data)=>{
            return data;
        }))
    }

  
  
  
    getProductDetay(id:any,categoryname:any){ //id ye göre belli ürünü detay sayfası için çekiyoruz
        return this.http.get<any>("http://localhost:3000/product"+"?productcategory="+categoryname+"&id="+id)//+"?id="+id
        .pipe(map((data:any)=>{
            return data;
        }))


    };
 
  


    getProduct(categoryname: any){  //Ürünleri veritabanından çektik.
      
        return this.http.get<any>("http://localhost:3000/product"+"?productcategory="+categoryname)//+"?productcategory="+categoryname
        .pipe(map((res:any)=>{
            
            return res;

        
    }));
  

    }
    
  
        
     
        

 





}

   



