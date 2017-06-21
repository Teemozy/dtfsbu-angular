import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

const backendUrl = 'http://localhost:3000';

@Injectable()
export class AuthenticationService {
  authToken: string;
  user: any;
  
  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .post( backendUrl + '/users/register', user, {headers: headers})
    .map(res => res.json())
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
    .post( backendUrl + '/users/authenticate', user, {headers: headers})
    .map(res => res.json());
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
    
    this.loadUserData();
    if(localStorage.getItem('id_token')){
      return true;
    } else {
      return false;
    }
  }
}
