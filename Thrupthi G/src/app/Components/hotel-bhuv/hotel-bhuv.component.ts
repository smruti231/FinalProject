import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-bhuv',
  templateUrl: './hotel-bhuv.component.html',
  styleUrls: ['./hotel-bhuv.component.css']
})
export class HotelBhuvComponent {
  hotels=[
    {image:'assets/images/hotels/buv1.jpg',name:'Umaid Bhawan - A Heritage Style Boutique Hotel',description:'1.7 miles from centre',roomDesc:'Twin Room 2 single beds',price:'Rs 3600/per day',rating:4.8},
    {image:'assets/images/hotels/buv2.jpg',name:'Hotel Pal Heights',description:'2.1 miles from centre',roomDesc:'King Room with City View 1 extra-large double bed',price:'Rs 2800/per day',rating:4.3},
    {image:'assets/images/hotels/buv3.jpg',name:'Mayfair Convention',description:'Beachfront',roomDesc:'Standard Double Room Beds: 1 double or 2 singles',price:'Rs 2900/per day',rating:4.7}

  ];
  bookNow(hotel:any){
    alert("Your request has been processed with the hotel,you will receive a confirmation email shortly.");
  }

}
