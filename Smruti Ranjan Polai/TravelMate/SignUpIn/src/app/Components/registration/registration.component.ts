import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  [x: string]: any;
  registrationForm: FormGroup;
  submitted = false;
  emailExists = false; // Initialize emailExists here
  passwordsMismatch = false;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      validator: passwordMatchValidator('password', 'confirmPassword')
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    console.log('Register Button Clicked');                     //
    this.submitted = true;

    // console.log('Form Values: ', this.registrationForm.value);
    // console.log('Form Validity: ', this.registrationForm.valid);
    // console.log('User data: ', this['user']);

    if (this.registrationForm.invalid) {
      console.log('Form is Invalid');           //
      return;
    }

    console.log('Form Values: ', this.registrationForm.value); //

    // if(this.f['password'].value !== this.f['confirmPassword'].value){
    //   alert('Password & Confirm Password do not match');
    //   return;
    // }

    const user = {
                name: this.f['name'].value,
                email: this.f['email'].value,
                phoneNo: this.f['phoneNo'].value,
                password: this.f['password'].value,
                confirmPassword: this.f['confirmPassword'].value
              };

    console.log('User data: ', user);          //
  
    this.userService.register(user).subscribe({
      next: () => {
        console.log('Registration Successful');
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('Registration Failed', error);
        if(error.status === 400 && error.error === "Email is already registered!"){
          this.emailExists = true;
          alert('Email is already registered!!!');
        }
        else if(this.f['password'].value !== this.f['confirmPassword'].value){
          alert('Password & Confirm Password do not match');
          return;
        }
        else{
          alert('Registration failed. Please try again.');
        }
        console.error(error);
      }
    });
  }
}