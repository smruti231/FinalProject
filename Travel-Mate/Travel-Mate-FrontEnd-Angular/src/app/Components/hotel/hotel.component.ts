import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../Models/hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../Services/hotel.service';
import { LocationService } from '../../location.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit{
  hotels : Hotel [] = [];
  hId : number = 0;
  uEmail : string = "";
  selectedLocation : number = 0;
  user = {} as User;

  constructor(private mySvc : HotelService,private userSvc : UserService, private activatedRoute : ActivatedRoute, private locationService: LocationService, private router:Router) {  }

  ngOnInit(): void {
    this.selectedLocation = this.locationService.getSelectedLocation();
    this.mySvc.getAllHotels(this.selectedLocation).subscribe((data: Hotel[]) => {
      this.hotels = data;
      console.log(data);
    })
    this.user = this.userSvc.getSelectedUser();
    console.log(this.user)
    console.log(this.user.email);
  }

  onClickBook(hid: number): void {
    if (this.user.email == undefined) {
      alert("Please Login First!");
      this.router.navigate(["/login"]);
    }
    else {
      this.mySvc.sendHotel(hid, this.user.email).subscribe((res) => {
        alert("Booking Request Sent!!");
      });
    }
  }
}
