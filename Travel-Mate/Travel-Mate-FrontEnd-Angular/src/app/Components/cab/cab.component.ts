import { Component } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent {
  src: string = ""
  dest: string = ""
  distance: number = 0.0
  fare: number = 0.0
  min: number = 0
  isDisabled: boolean = true
  isDisabledBook: boolean = true
  http: any;
  selectedLocation: number = 0;
  user = {} as User;

  constructor(private myService: HotelService, private router: Router, private userSvc: UserService) {
  }

  ngOnInit() : void{
    this.user = this.userSvc.getSelectedUser();
  }

  toClear(): void {
    this.src = "";
    this.dest = "";
    this.distance = 0.0;
    this.fare = 0.0;
  }

  // Converts numeric degrees to radians
  toRad(Value: number): number {
    return Value * Math.PI / 180;
  }
  calcCrow(lat1: string, lon1: string, lat2: string, lon2: string): number {
    var R = 6371; // km
    var dLat = this.toRad(parseFloat(lat2) - parseFloat(lat1));
    var dLon = this.toRad(parseFloat(lon2) - parseFloat(lon1));
    var d1 = this.toRad(parseFloat(lat1));
    var d2 = this.toRad(parseFloat(lat2));

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(d1) * Math.cos(d2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return parseFloat((d * 1.3).toFixed(2));
  }

  onClickBtn(): void {
    this.myService.getSource(this.src).subscribe((resSrc) => {
      this.myService.getDestination(this.dest).subscribe((resDest) => {
        this.distance = this.calcCrow(resSrc[0].lat, resSrc[0].lon, resDest[0].lat, resDest[0].lon);
        this.fare = parseFloat((this.distance * 7).toFixed(2));
        this.isDisabledBook = false;
      });
    });
  }

  onClickBook(): void {
    if (this.user.email == undefined) { 
      alert("Please Login First!");
      this.router.navigate(["/login"]);
    }

    else {
      this.min = Math.floor(Math.random() * 15)
      if (confirm(`Are your sure you want to book the cab from ${this.src} to ${this.dest} at Rs.${this.fare}`)) {
        alert(`Your Cab has been booked for ${this.src} to ${this.dest} and will be arriving in ${this.min} minutes`);
        this.isDisabled = false;
      }
    }
  }

  onClickCancel(): void {
    if(confirm("Are you sure you want to cancel you cab booking?")){
      alert("Your Cab Booking has been canceled")
      this.toClear();
      this.router.navigate(["/main"]);
    }
    else{
      alert("Your cab is not cancelled");
    }
  }
}
