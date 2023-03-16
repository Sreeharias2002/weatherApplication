import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private auth:AuthService){}
  ngOnInit(): void {
      this.auth.canauthenticate
  }

  formdata={name:"",email:'',password:''};
  submit=false;
  errorMessage='';
  loading=false
  
  
  onsubmit(){
   
    this.loading=true
    this.auth.register(this.formdata.name,this.formdata.email,this.formdata.password).subscribe({
      next:data=>{
        this.auth.storetoken(data.idToken);
        console.log("registed id token "+ data.idToken)
        this.auth.canauthenticate();
    
      },
      error:data=>{
        if(data.error.error.message=='INVALID_EMAIL'){
          this.errorMessage='Invalid email!' }

          else if(data.error.error.message=='EMAIL_EXISTS'){
            this.errorMessage='already email exists!'}
          else {
            this.errorMessage='Unknown error occured when creating this account'
          }
          
      }
    }).add(()=>{
      this.loading=false;
      console.log("register completed")
    })
    
  }

}
