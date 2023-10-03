import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocation } from 'src/app/Models/geo-location';
import { GeoLocationService } from 'src/app/Services/geo-location.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-dist',
  templateUrl: './view-dist.component.html',
  styleUrls: ['./view-dist.component.css']
})
export class ViewDistComponent {
  src : string = ""
  dest : string = ""
  distance : number = 0.0
  http: any;
   
   constructor(private myService : GeoLocationService, private router : Router) {
    
   }

   // Converts numeric degrees to radians
   toRad(Value: number) :  number
   {
       return Value * Math.PI / 180;
   }
   calcCrow(lat1 : string, lon1 : string, lat2: string, lon2 : string) : number
    {
      var R = 6371; // km
      var dLat = this.toRad(parseFloat(lat2)-parseFloat(lat1));
      var dLon = this.toRad(parseFloat(lon2)-parseFloat(lon1));
      var d1 = this.toRad(parseFloat(lat1));
      var d2 = this.toRad(parseFloat(lat2));

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(d1) * Math.cos(d2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      // return parseFloat(d.toPrecision(2));
      return parseFloat(d.toFixed(2));
    }


   ngOnInit(): void{
    this.myService.getSource(this.src).subscribe((emp)=>{
      this.router.navigate(['/']);
      // this.src = this.src
    });
   }

  onClickBtn(): void {
    alert(this.src + " to " + this.dest)
    this.myService.getSource(this.src).subscribe((resSrc) => {
      this.myService.getDestination(this.dest).subscribe((resDest) => {
        this.distance = this.calcCrow(resSrc[0].lat, resSrc[0].lon, resDest[0].lat, resDest[0].lon);
      });
    });
  }
  
}