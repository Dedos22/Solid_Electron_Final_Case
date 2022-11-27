import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'

import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
@Component({
    selector:'signup',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
    
    })

export class signupComponent implements OnInit {
    public signupForm !: FormGroup; //signupForm ile form içindeki inputları çekiyoruz
    constructor(private formBuilder :FormBuilder,private http :HttpClient,private router:Router ,private alertify:AlertifyService){}
    ngOnInit(): void {
        // ...
        this.signupForm=this.formBuilder.group({
            fullname:[ ' '],
            email:[' '],
            password:[' ']

        })
      
      }
      //db.json daki signupUsers tablomuza  , kullanıcı bilgilerini kaydettik.
      signUp(){
        
        if(this.signupForm.value.name=="" || this.signupForm.value.email==""){
          this.alertify.error("Boşluk bırakma...");
          return false;
        }
        
        else {

      
           
          this.http.post<any>("http://localhost:3000/signupUsers ",this.signupForm.value).subscribe(res=>{
            this.alertify.success("Kayıt Başarılı :-)");
           //Kayıt başarılı mesajı verdik,alertify service kullandık
           this.signupForm.reset();//Formu temizledik
       //  this.router.navigate(['../login']);//login sayfasına yönlendiriyoruz.
         
           }
         ,err=> {
          this.alertify.error("Bir şeyler yanlış...");
        })

        }
       
        return true;

      

    
    }
   
    }





