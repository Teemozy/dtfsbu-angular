import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  constructor(){}

  validateRegisterFields(user, callback){
    if(!user.email || !user.firstName || !user.lastName || !user.password || !user.passwordConfirm){
      if(user.password != user.passwordConfirm){
        callback('Passwords do not match');
      }
      else{
        callback('All fields must be filled out');
      }
    } else {
      callback(null);
    }
  }
}