import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { passwordMatchValidatorReset } from '../registration/custom-validators';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  invalidOTPMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required],
      validator: passwordMatchValidatorReset('newPassword', 'confirmNewPassword')
    });
  }

  canGetOTP(): boolean {
    return this.forgetPasswordForm.get('email')!.valid;
  }

  getOTP(): void {
    const email = this.forgetPasswordForm.get('email')!.value;

    this.userService.sendOTP(email).subscribe({
      next: (response: any) => {
        if (response && response.message === 'OTP sent successfully.') {
          this.forgetPasswordForm.get('otp')!.enable();
          alert('OTP sent successfully');
        } else {
          console.error('Failed to send OTP: Invalid Response format');
          alert('Failed to send OTP');
        }
      },
      error: (error: any) => {
        console.error('Failed to send OTP:', error);
        alert('Failed to send OTP. Please try again later.');
      },
    });
  }

  validateOTP(): void {
    const email = this.forgetPasswordForm.get('email')!.value;
    const enteredOTP = this.forgetPasswordForm.get('otp')!.value;

    this.userService.validateOTP(email, enteredOTP).subscribe({
      next: (response: any) => {
        if (response.isValid) {
          this.forgetPasswordForm.get('newPassword')!.enable();
          this.forgetPasswordForm.get('confirmNewPassword')!.enable();
          this.invalidOTPMessage = null;
          alert('OTP is valid. You can now set a new password.');
        } else {
          this.forgetPasswordForm.get('otp')!.setErrors({ invalidOTP: true });
          this.invalidOTPMessage = 'Invalid OTP. Please try again.';
          alert('Invalid OTP. Please try again.');
        }
      },
      error: (error: any) => {
        console.error('Failed to validate OTP:', error);
        alert('Failed to validate OTP. Please try again later.');
      },
    });
  }

  canValidateOTP(): boolean {
    return (
      this.forgetPasswordForm.get('otp')!.valid &&
      this.forgetPasswordForm.get('otp')!.value !== '' &&
      !this.forgetPasswordForm.hasError('invalidOTP')
    );
  }

  canSubmit(): boolean {
    return (
      this.forgetPasswordForm.valid &&
      this.forgetPasswordForm.get('otp')!.value !== '' &&
      this.forgetPasswordForm.get('newPassword')!.value === this.forgetPasswordForm.get('confirmNewPassword')!.value
    );
  }

  onSubmit(): void {
    if (this.canSubmit()) {
      const email = this.forgetPasswordForm.get('email')!.value;
      alert(`This is Testing ${email}`);
      const newPassword = this.forgetPasswordForm.get('newPassword')!.value;
      const confirmNewPassword = this.forgetPasswordForm.get('confirmNewPassword')!.value;
      alert(`This is Testing ${confirmNewPassword}`);
      const otp = this.forgetPasswordForm.get('otp')!.value;

      this.userService.resetPassword(email, otp, newPassword, confirmNewPassword).subscribe({
        next: (response: any) => {
          console.log('Password reset successful:', response);
          alert('Password reset successful.');
        },
        error: (error: any) => {
          console.error('Password reset failed:', error);
          alert('Password reset failed. Please try again later.');
        },
      });
      
    }
  }
}