import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

isauthenticated():boolean{
  if(sessionStorage.getItem('token')!==null){
    return true;
  }
  return false; 
}
canaccess(){
  if(!this.isauthenticated()){
    this.router.navigate(['/login'])
  }
 }
 canauthenticate(){
  if(this.isauthenticated()){
    this.router.navigate(['/dashboad'])
  }
 }
 register(name:string,email:string,password:string){
    
  return this.http.post<{idToken:string}>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTOusM2fKlLhRLF0Er7bHYUXF542B3cEs",
  {displayName:name,email:email,password:password})
 }
 storetoken(token:string){
  sessionStorage.setItem('token',token);
 }


 login(email:string,password:string){
    return this.http.post<{idtoken:string}>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTOusM2fKlLhRLF0Er7bHYUXF542B3cEs",
    {email,password})
 }
 removetoken(){
  sessionStorage.removeItem('token')
 }

}
