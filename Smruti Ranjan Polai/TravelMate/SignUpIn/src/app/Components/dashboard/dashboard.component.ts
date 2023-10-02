// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service'; // Import the UserService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string | undefined; // Variable to hold the user's name

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    // Retrieve the user's email from the token (if it's stored in the token)
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const userEmail = tokenPayload.sub; // Assuming 'sub' contains the email
      
      // Get the user's name based on their email
      this.userService.getUsernameByEmail(userEmail).subscribe(
        (data: any) => {
          this.userName = data.name;
        },
        (error: any) => {
          console.error('Failed to get username:', error);
        }
      );
    }
  }

  // Method to log out the user
  logout() {
    // Clear any user-related data (e.g., token) and navigate back to the login page
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
