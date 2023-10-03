import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service'; // Import the LocationService

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedLocation: string = '';

  constructor(private router: Router, private locationService: LocationService) {} // Inject the LocationService

  ngOnInit() {
    this.selectedLocation = this.locationService.getSelectedLocation();
  }

  // Function to set the background image dynamically
  getBackgroundImage() {
    return `url('assets/images/${this.selectedLocation}.jpg')`;
  }
  
  navigateToHomepage() {
    this.router.navigate(['/']); // Navigate to the homepage route
  }

  bookHotel() {
    this.router.navigate(['/hotel']); // Navigate to the hotel route
  }

  blog(){
    this.router.navigate(['/blog']);
  }

  bookCab(){
    this.router.navigate(['/cab']);
  }
}
