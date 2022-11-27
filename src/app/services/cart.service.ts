import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { anasayfaComponent } from '../anasayfa/anasayfa.component';
import { AlertifyService } from './alertify.service';
import { ApiService } from './api.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public sepetList : any =[]
  public productListe = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  userId:any=1;
  constructor(private http:HttpClient,private api:ApiService,private alertify:AlertifyService) { }
 

  setProduct(product:any){
    this.sepetList.push(...product);
    this.productListe.next(product)
  }
 

 
  silSepetItem(product:any){
    this.sepetList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.sepetList.splice(index,1);
      }
    }) 
  }

  silAllSepet(){
    this.sepetList=[]
    this.productListe.next(this.sepetList);
  }

 
}