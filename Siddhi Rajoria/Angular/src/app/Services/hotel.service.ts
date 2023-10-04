import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../Models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotelURL : string = "http://localhost:5163/api/HotelBook";
  userURL : string = "http://localhost:5163/api/HotelBook/send-user-mail";

  constructor(private http : HttpClient) { }

  public getAllHotels() : Observable<Hotel []>{
    return this.http.get<Hotel[]>(this.hotelURL);
  }

  public sendHotel(hId : number, uEmail : string) : Observable<any>{
    let tempUrl = this.hotelURL + "/" + hId + "/" + uEmail;
    return this.http.post<any>(tempUrl, {hId: hId, uEmail: uEmail});
  }

}
