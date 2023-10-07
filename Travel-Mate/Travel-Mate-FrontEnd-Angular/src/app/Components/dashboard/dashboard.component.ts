// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service'; // Import the UserService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hidden : boolean = true;
  userName: string = "Guest";
  user = {} as User;

  hiddenOut : boolean = true;
  constructor(public router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const userEmail = tokenPayload.sub; 
      this.userService.getUserDetailsByEmail(userEmail).subscribe(
        (data: any) => {
          this.userName = data.name;
          this.hidden = true;
          this.hiddenOut = false;
          this.userService.setSelectedUser(data);
        },
        (error: any) => {
          console.error('Failed to get username:', error);
        }
      );
    }
    else{
      this.hidden = false;
      this.hiddenOut = true;
    }
  }

  // Method to log out the user
  logout() {
    // Clear any user-related data (e.g., token) and navigate back to the login page
    this.userService.logout();
    this.router.navigate(['/login']);
    this.onClick();
  }

  //Method to log in the user
  login() {
    this.router.navigate(['/login']);
    this.onClick();
  }

  onClick(): void{
    if(this.userName == ""){
      this.hidden = false;
      this.hiddenOut = true;
    }
    else{
      this.hidden = true;
      this.hiddenOut = false;
    }
  }
}


