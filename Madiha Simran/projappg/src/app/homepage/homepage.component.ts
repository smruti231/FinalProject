import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  selectedLocation: string ='';
  constructor(private locationService: LocationService) {}

  onLocationChange(selectedLocation: string) {
    this.locationService.setSelectedLocation(selectedLocation);
  }
}
