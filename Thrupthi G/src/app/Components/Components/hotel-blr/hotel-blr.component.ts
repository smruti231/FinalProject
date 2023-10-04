import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-blr',
  templateUrl: './hotel-blr.component.html',
  styleUrls: ['./hotel-blr.component.css']
})
export class HotelBlrComponent {
  hotels=[
    {image:'assets/images/hotels/b1.jpg',name:'Four Seasons Hotel Bengaluru at Embassy One',description:'5.2 km from centre',roomDesc:'Twin Room 2 single beds',price:'Rs 3300/per day',rating:4.8},
    {image:'assets/images/hotels/b2.jpg',name:'Shangri-La Bengaluru',description:'2.3 km from centre',roomDesc:'King Room with City View 1 extra-large double bed',price:'Rs 3000/per day',rating:4.5},
    {image:'assets/images/hotels/hotel3.jpg',name:'Taj Yeshwantpur Bengaluru',description:'1.5 Km from centre Metro Access',roomDesc:'Standard Double Room Beds: 1 double or 2 singles',price:'Rs 3400/per day',rating:4.6}

  ];
  bookNow(hotel:any){
    alert("Your request has been processed with the hotel,you will receive a confirmation email shortly.");
  }

}
