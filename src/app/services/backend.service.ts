import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service'

const backendUrl = 'http://localhost:3000';

@Injectable()
export class BackendService extends AuthenticationService{

  getMatches(){
    return this.authenticatedGet('/match').map(res => res.json());
  }

  updateProfile(formData){
    return this.authenticatedPost('/users/profile', formData).map(res => res.json());
  }

}
