import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/Models/blogs';
import { AllBlogsService } from 'src/app/Services/all-blogs.service';
import { LocationService } from 'src/app/location.service';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';

@Component({
  selector: 'app-blog-loc',
  templateUrl: './blog-loc.component.html',
  styleUrls: ['./blog-loc.component.css']
})
export class BlogLocComponent {
  selectedLocation: number = 0;
  
  blogs:Blogs[]=[];
  constructor(private mySvc:AllBlogsService, private activatedRoute:ActivatedRoute, private locSvc : LocationService){

  }
  ngOnInit(): void {
    this.selectedLocation = this.locSvc.getSelectedLocation();
    this.mySvc.getAllBlogs().subscribe((data: Blogs[]) => {
      this.blogs = data;
    })
    // console.log(this.selectedLocation);
  }
}
