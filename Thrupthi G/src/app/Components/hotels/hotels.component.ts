import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  hotels=[
    {image:'assets/images/hotels/hotel1.jpg',name:'Grand Hyatt Mumbai Hotel and Residences',description:'1.7 miles from centre Beach nearby',roomDesc:'Twin Room 2 single beds',price:'Rs 3000/per day',rating:4.2},
    {image:'assets/images/hotels/hotel2.jpg',name:'The Westin Mumbai Garden City',description:'6.7 miles from centre',roomDesc:'King Room with City View 1 extra-large double bed',price:'Rs 2800/per day',rating:4.3},
    {image:'assets/images/hotels/hotel3.jpg',name:'Taj Santacruz Opens',description:'Beachfront',roomDesc:'Standard Double Room Beds: 1 double or 2 singles',price:'Rs 3200/per day',rating:4.5}

  ];
  bookNow(hotel:any){
    alert("Your request has been processed with the hotel,you will receive a confirmation email shortly.");
  }

}
