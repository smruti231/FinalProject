import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../Models/hotel';
import { HttpClient } from '@angular/common/http';
import { Cab } from '../Models/cab';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  // allhotelURL : string = "http://localhost:5163/api/HotelBook";
  hotelURL : string = "http://localhost:5163";
  // userURL : string = "http://localhost:5163/api/HotelBook/";
  cabUrl: string = "https://geocode.maps.co/search?q=";

  constructor(private http : HttpClient) { }

  public getAllHotels(lId : number) : Observable<Hotel []>{
    let tempUrl = this.hotelURL + "/" + lId; 
    return this.http.get<Hotel[]>(tempUrl);
  }

  public sendHotel(hId : number, uEmail : string) : Observable<any>{
    let tempUrl = this.hotelURL + "/" + hId + "/" + uEmail;
    return this.http.post<any>(tempUrl, {hId: hId, uEmail: uEmail});
  }

  
  public getSource(loc: string): Observable<Cab []> {
    if(loc.includes(' ')){
      loc = loc.replaceAll(" ", "+")
    }
    let tempUrl = this.cabUrl + loc;
    return this.http.get<Cab []>(tempUrl);
  }

  public getDestination(loc: string): Observable<Cab []> {
    let tempUrl = this.cabUrl + loc;
    return this.http.get<Cab []>(tempUrl);
  }
}
