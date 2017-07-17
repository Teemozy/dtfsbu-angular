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
        this.saveUserData(token); 
        onLoginCallBack();
      }
    }, err =>  console.log(err));
  }

  logoutUser(){
    this.authToken = null;
    localStorage.clear();
  }

  saveUserData(token){
    localStorage.setItem('id_token' , token);
    this.authToken = token;
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

  authenticatedPost(url, data){
    let headers = new Headers();
    headers.append('token', localStorage.getItem('id_token'));
    //headers.append('Content-Type', 'application/json');

    return this.http.post( backendUrl + url, data, {headers: headers});
  }
}
