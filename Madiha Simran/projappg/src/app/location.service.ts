import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private selectedLocation: string = '';
  
  setSelectedLocation(location: string) {
    this.selectedLocation = location;
  }
  
  getSelectedLocation() {
    return this.selectedLocation;

  
}
}

