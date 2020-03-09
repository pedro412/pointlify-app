import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  error = false;
  errorMessage: string;
  loading: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    const user = { email, password };
    this.loading = true;
    this.authService.login({ user }).subscribe(
      user => {
        console.log(user);
        this.authService.saveUser(user);
        this.loading = false;
        this.error = false;
      },
      err => {
        this.error = true;
        this.errorMessage = 'Ocurrió un error';
        if (err.status === 401) this.errorMessage = 'Credenciales incorrectas';
        this.password.reset();
        this.loading = false;
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
