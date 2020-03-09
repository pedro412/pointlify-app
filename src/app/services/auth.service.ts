import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ user }) {
    return this.http.post('https://api.pointlify.com/users/login', user);
  }

  saveUser(user: any) {
    document.cookie = `userName=${user.userName}`;
    document.cookie = `token=${user.token}`;
  }
}
