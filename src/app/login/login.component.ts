import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = {
    userEmail: '',
    userPassword: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = {
      email: this.data.userEmail,
      password: this.data.userPassword
    };

    // HTTP POST request to the login API
    this.http.post('http://localhost:3002/users/login', loginData)
      .subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Redirect to home page or another component
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login error (e.g., show an error message)
        }
      });
  }
}
