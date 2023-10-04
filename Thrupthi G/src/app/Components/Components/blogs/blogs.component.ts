import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  cards=[
    {id:1,title:'All Blogs',content:'Are you Ready to escape the ordinary and dive into the extraordinary? Our travel blogs are your portal to a world of breathtking landscapes,vibrant cultures and unforgettable experinces."Let our travel blogs be your passport to the world\'s wonders,inspiring your next adventure"'},
    
  ];
 
  constructor(private router:Router){}
  
 
  
  

}
