import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from './Models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private selectedLocation: number = 0;
  allLocUrl = "http://localhost:5163/api/Location/getLocations";
  getLocUrl = "http://localhost:5163/api/Location";

  constructor(private http: HttpClient) { }

  setSelectedLocation(location: number) {
    this.selectedLocation = location;
  }

  getSelectedLocation() {
    return this.selectedLocation;
  }

  

  public getAllLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(this.allLocUrl);
  }

  public getLocation(lId : number) : Observable<Locations>{
    let tempUrl = this.getLocUrl + "/" + lId; 
    return this.http.get<Locations>(tempUrl);
  }
}

