import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';


const backendUrl = 'http://localhost:3000';

@Injectable()
export class AuthenticationService {

  

  authToken: string;
  user: any;
  
  constructor( private http:Http ) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .post( backendUrl + '/users/register', user, {headers: headers})
    .map(res => res.json())
  }

  authenticateUser(user, onLoginCallBack){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .post( backendUrl + '/users/authenticate', user, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      //Check if we have token then save and callback
      let token = data.token;
      if(token){
        this.saveUserData(token, user); 
        onLoginCallBack();
      }
    }, err =>  console.log(err));
  }

  logoutUser(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  saveUserData(token, user){
    localStorage.setItem('id_token' , token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadUserData(){
    this.authToken = localStorage.getItem('id_token');
    this.user = localStorage.getItem('user');
  }

  isLoggedIn(){
    if( !tokenNotExpired() && localStorage.getItem('id_token')){
      return true;
    } else {
      return false;
    }
  }

  authenticatedGet(url){
    let headers = new Headers();
    headers.append('token', localStorage.getItem('id_token'));
    headers.append('Content-Type', 'application/json');
 
    return this.http.get( backendUrl + url, { headers: headers})
  }
  
}
