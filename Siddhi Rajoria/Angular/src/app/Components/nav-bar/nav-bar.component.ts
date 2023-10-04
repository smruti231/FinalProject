import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() pageTitle:string="TravelMate";
  constructor(private router: Router) {}

 

goBack() {

  // Implement the logic to navigate back

  // For example: this.router.navigate(['/']);

}

 

goHome() {

  // Implement the logic to navigate to the home page

  // For example: this.router.navigate(['/home']);

}

 

login() {

  // Implement the logic to navigate to the login page

  // For example: this.router.navigate(['/login']);

}

 

signup() {

  // Implement the logic to navigate to the signup page

  // For example: this.router.navigate(['/signup']);

}

}
  


