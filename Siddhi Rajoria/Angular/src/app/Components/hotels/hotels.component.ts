import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hotel } from 'src/app/Models/hotel';
import { HotelService } from 'src/app/Services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {

  hotels : Hotel [] = [];
  hId : number = 0;
  uEmail : string = "";


  constructor(private mySvc : HotelService, private activatedRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.mySvc.getAllHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
      console.log(data);
    })
  }

  onClickBook(hid : number) : void{  
    this.mySvc.sendHotel(hid, "prabhatpadhiary@gmail.com").subscribe((res) => {
      alert("Booking Request Sent!!");
    });
  }

}
