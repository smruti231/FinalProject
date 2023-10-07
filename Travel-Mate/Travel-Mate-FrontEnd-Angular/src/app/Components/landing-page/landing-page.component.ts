import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Play the video for 5 seconds
    setTimeout(() => {
      this.router.navigate(['/home']); // Navigate to the home page
    }, 2000); // 
  }
}