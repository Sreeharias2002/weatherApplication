import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formdata={ email:'',password:''}
  submit=false;
  loading=false;
  errormessage=''
  constructor(private auth:AuthService){}
  ngOnInit(): void {
      this.auth.canauthenticate()
  }

 onsubmit(){
  this.loading=true;
this.auth.login(this.formdata.email,this.formdata.password).subscribe({
  next:data=>{
    this.auth.storetoken(data.idtoken)
    console.log('logged user token is '+ data.idtoken)
    this.auth.canauthenticate();
  },
  error:data=>{
    if(data.error.error.message=="INVALID_PASSWORD" ||data.error.error.message=="INVALID_Email" ){
      this.errormessage="Invalid Credentials!";
      }
      else {
        this.errormessage="Unknown error when login into this account"
    }
  }
}).add(() => {this.loading=false
console.log("login process completed")})

 }


}
