import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  baseUrl : string = "http://localhost:5163/api/Auth";
  baseUrl2 : string = "http://localhost:5163/api/Otp";
  // baseUrl3 : string = "http://localhost:5163/api/Otp/generate?email=mangalpursmrutiranjan%40gmail.com";
  // baseUrl4 : string = "http://localhost:5163/api/Otp/validate?email=mangalpursmrutiranjan%40gmail.com";

private userSubject = new BehaviorSubject<{ name: string; isLoggedIn: boolean}>({name:'', isLoggedIn:false});

  constructor(private http: HttpClient) {}

  // Registration
  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  // Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Check email uniqueness
  isEmailUnique(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/isEmailUnique?email=${email}`);
  }

  getUserProfile(): Observable<any>{
    return this.http.get(`${this.baseUrl}/profile`);
  }

  getUsernameByEmail(email: string):Observable<any>{
    return this.http.get(`${this.baseUrl}/getUsernameBYEmail?email=${email}`);
  }
	
logout(): void {
  localStorage.removeItem('token');
}

resetPassword(email: string, otp: number, newPassword: string, confirmNewPassword:string): Observable<any>{
  const data = {email, otp, newPassword, confirmNewPassword};
  return this.http.post(`${this.baseUrl}/reset-password`, data);
}

sendOTP(email: string): Observable<any> {
  return this.http.post(`${this.baseUrl2}/generate?email=${email}`,{});
  // return this.http.post(`${this.baseUrl3}`,{email});
}

validateOTP(email: string, otp: number): Observable<any> {
  // return this.http.post(`${this.baseUrl2}/validate?email=${email}&otp=${otp}`, {});
  return this.http.post(`${this.baseUrl2}/validate`, {email, otp});
}
}
