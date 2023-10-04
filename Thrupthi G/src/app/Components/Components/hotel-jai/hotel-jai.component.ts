import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-jai',
  templateUrl: './hotel-jai.component.html',
  styleUrls: ['./hotel-jai.component.css']
})
export class HotelJaiComponent {
  hotels=[
    {image:'assets/images/hotels/j1.jpg',name:'Trident Jaipur',description:'Amber Fort Road',roomDesc:'Twin Room 2 single beds',price:'Rs 3100/per day',rating:4.6},
    {image:'assets/images/hotels/j2.jpg',name:'Fairmont Jaipur',description:'1.2 Km from centre',roomDesc:'King Room with City View 1 extra-large double bed',price:'Rs 2800/per day',rating:4.7},
    {image:'assets/images/hotels/j3.jpg',name:'Umaid Bhawan - A Heritage Style Boutique Hotel',description:'Beachfront',roomDesc:'Standard Double Room Beds: 1 double or 2 singles',price:'Rs 3600/per day',rating:4.8}

  ];
  bookNow(hotel:any){
    alert("Your request has been processed with the hotel,you will receive a confirmation email shortly.");
  }

}
