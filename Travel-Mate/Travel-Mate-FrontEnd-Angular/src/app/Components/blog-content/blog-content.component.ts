import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/Models/blogs';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';
import { AllBlogsService } from 'src/app/Services/all-blogs.service';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
  
export class BlogContentComponent {
  blogs:Blogs[]=[];

  selectedLocation : number = 0;

  selectedLocName : string = "";

 

  constructor(private mySvc:AllBlogsService, private activatedRoute:ActivatedRoute, private locSvc : LocationService){

 

  }

  ngOnInit(): void {

    this.selectedLocation = this.locSvc.getSelectedLocation();

    this.mySvc.getAllBlogs().subscribe((data: Blogs[]) => {

      this.blogs = data;

    })

  }

}
