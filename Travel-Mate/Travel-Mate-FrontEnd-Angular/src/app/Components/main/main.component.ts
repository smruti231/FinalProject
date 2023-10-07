import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../location.service'; // Import the LocationService

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedLocation: number = 0;
  selectedLocName : string = "";

  constructor(private router: Router, private locationService: LocationService) {} // Inject the LocationService

  ngOnInit() {
    this.selectedLocation = this.locationService.getSelectedLocation();
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
