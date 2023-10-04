import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-kol',
  templateUrl: './hotel-kol.component.html',
  styleUrls: ['./hotel-kol.component.css']
})
export class HotelKolComponent {
  hotels=[
    {image:'assets/images/hotels/k1.jpg',name:'ITC Royal Bengal, a Luxury Collection Hotel, Kolkata',description:'1.7 Km from Seldah Railway Station',roomDesc:'Twin Room 2 single beds',price:'Rs 2800/per day',rating:4.2},
    {image:'assets/images/hotels/k2.jpg',name:'Fairfield by Marriott Kolkata',description:'2.7 Km from centre Metro Access',roomDesc:'King Room with City View 1 extra-large double bed',price:'Rs 3000/per day',rating:4.3},
    {image:'assets/images/hotels/k3.jpg',name:'Hyatt Regency Kolkata',description:'2.2 Km centre',roomDesc:'Standard Double Room Beds: 1 double or 2 singles',price:'Rs 3200/per day',rating:4.8}

  ];
  bookNow(hotel:any){
    alert("Your request has been processed with the hotel,you will receive a confirmation email shortly.");
  }

}
