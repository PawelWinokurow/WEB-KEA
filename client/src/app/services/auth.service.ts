import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from './../../environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  async login(identifier: string, password: string) {
    let result = await this.httpService.request(this.http.post(`${environment.serverURL}/login`, 
    {account: { email: identifier, username: identifier, password: password }})).toPromise();
    if (result){
      this.setSession(result)
    }
    return result;
  }

  async checkHash(hash: string) {
    let result = await this.httpService.request(this.http.get(`${environment.serverURL}/reset?hash=${hash}`)).toPromise();
    return result;
  }

  public setSession(result) {
    if (result) {
      const expiresAt = moment().add(result.expiresIn, 'milliseconds');
      localStorage.setItem('id_token', result.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
      localStorage.setItem("account", JSON.stringify(result.account));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  setAccount(account) {
    account = {
      username: account.username,
      email: account.email,
      companyCode: account.companyCode,
      role: account.role
    }
    localStorage.setItem("account", JSON.stringify(account));
  }

  getAccount() {
    return JSON.parse(localStorage.getItem("account"))
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  prolongToken(account) {
    return this.http.put(`${environment.serverURL}/login`, account);
  }
}
