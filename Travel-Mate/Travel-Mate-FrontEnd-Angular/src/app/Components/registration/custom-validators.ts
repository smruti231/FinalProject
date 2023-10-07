import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(controlName)?.value;
    const confirmPassword = control.get(matchingControlName)?.value;

    return password === confirmPassword ? null : { passwordsMismatch: true };
  };
}

export function passwordMatchValidatorReset(controlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const newPassword = control.get(controlName)?.value;
    const confirmNewPassword = control.get(matchingControlName)?.value;

    return newPassword === confirmNewPassword ? null : { passwordsMismatch: true };
  };
}