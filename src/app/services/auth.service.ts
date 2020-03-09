import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private http: HttpClient) {}

  login({ user }) {
    return this.http.post('https://api.pointlify.com/users/login', user);
  }

  logout() {
    document.cookie = 'userName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  }

  saveUserCookie(user: any) {
    document.cookie = `userName=${user.userName}`;
    document.cookie = `token=${user.token}`;
  }

  getUser(): Object {
    const userName = this.getCookie('userName');
    const token = this.getCookie('token');
    this.user = {
      userName,
      token
    };

    return this.user;
  }

  private getCookie(name: string) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length == 2)
      return parts
        .pop()
        .split(';')
        .shift();
  }
}
