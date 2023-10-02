import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service'; // Import the UserService
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const user = {
      email: this.f['email'].value,
      password: this.f['password'].value
    };

    this.userService.login(user).subscribe({
      next: (data) => {
        // Assuming the backend returns a JWT token upon successful login
        localStorage.setItem('token', data.token); // Store the token in localStorage
        this.router.navigate(['/dashboard']); // Redirect to the dashboard or home page
      },
      error: (error) => {
        alert('Login failed. Please check your credentials and try again.');
        console.error(error);
      }
    });
  }

  navigateToRegistration() {
    this.router.navigate(['/register']); // Navigate to the registration page
  }

}

