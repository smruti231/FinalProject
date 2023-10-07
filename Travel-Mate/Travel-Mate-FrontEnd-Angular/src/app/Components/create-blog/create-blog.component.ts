import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AllBlogsService } from 'src/app/Services/all-blogs.service';
import { UserService } from 'src/app/Services/user.service';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  blogTitle: string = '';
  authorName: string = '';
  blogContent: string = '';
  locationId : number =0;
  selectedLocation : number = 0;
  user = {} as User;

  constructor(private addBlog: AllBlogsService, private userSvc : UserService, private router : Router, private locSvc: LocationService){}

  ngOnInit(): void {
    this.user = this.userSvc.getSelectedUser();
    this.locationId = this.locSvc.getSelectedLocation();
  }

  submitBlog() {
    const blogData = {
      blogId : 0,
      blogTitle: this.blogTitle,
      userName: this.authorName,
      content: this.blogContent,
      locId : this.locationId
    };
    if (this.user.email == undefined) {
      alert("Please Login First!");
      this.router.navigate(["/login"]);
    }
    else {
    this.addBlog.addBlogs(blogData).subscribe((res)=>{
      alert("Blog Posted Successfully!!");
      this.router.navigate(["/blog"]);
    })
    }
  }
}