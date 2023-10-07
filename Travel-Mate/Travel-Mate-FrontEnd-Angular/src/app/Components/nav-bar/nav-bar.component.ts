import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }

goBack() {
  if (!this.isHomePage) {
    this.router.navigate(['/']); // Navigate to the homepage route
}
}
goHome() {
  if (!this.isHomePage) {
    this.router.navigate(['/home']); // Navigate to the homepage route
  }
}

login() {
  this.router.navigate(['/login']); // Implement logic for login route
}

signup() {
  this.router.navigate(['/signup']);
}
}
 


