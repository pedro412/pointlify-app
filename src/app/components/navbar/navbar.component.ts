import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showCollapse = false;
  user: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  collapse() {
    this.showCollapse = !this.showCollapse;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
