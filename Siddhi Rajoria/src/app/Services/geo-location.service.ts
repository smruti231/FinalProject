import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoLocation } from '../Models/geo-location';
import { GetLoc } from '../Models/get-loc';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  baseUrl: string = "https://geocode.maps.co/search?q=";
  
  constructor(private http: HttpClient) { }
  
  public getSource(loc: string): Observable<GetLoc []> {
    let tempUrl = this.baseUrl + loc;
    return this.http.get<GetLoc []>(tempUrl);
  }

  public getDestination(loc: string): Observable<GetLoc []> {
    let tempUrl = this.baseUrl + loc;
    return this.http.get<GetLoc []>(tempUrl);
  }
}
