import { Component } from '@angular/core';
import { LocationService } from '../../location.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  selectedLocation: number = 0;
  isDisabled : boolean = true;
  constructor(private locationService: LocationService) {}

  ngOnInit() : void{
  }
  
  
  onLocationChange(selectedLocation: number) {
    this.locationService.setSelectedLocation(selectedLocation);
    console.log(selectedLocation);
    if(this.selectedLocation!=0)
      this.isDisabled = false;
    else
      this.isDisabled = true;
  }
}
