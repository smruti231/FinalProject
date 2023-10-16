import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { repeat } from 'rxjs';
import { LocationService } from 'src/app/location.service';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
  
export class BlogsComponent {
  selectedLocation : number = 0;
  selectedLocName : string = "";
  cards=[
    {id:1,title:'All Blogs',content:'Are you Ready to escape the ordinary and dive into the extraordinary? Our travel blogs are your portal to a world of breathtking landscapes,vibrant cultures and unforgettable experinces."Let our travel blogs be your passport to the world\'s wonders,inspiring your next adventure"'},
  ];

  constructor(private router:Router, private locSvc: LocationService){}

  ngOnInit(): void{
    this.selectedLocation = this.locSvc.getSelectedLocation();
    this.locSvc.getLocation(this.selectedLocation).subscribe((data : any)=>{
      this.selectedLocName = data.locName;
    });
  }
}
