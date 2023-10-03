import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  blogContent: string = ''; // Store the blog content

  constructor(private router: Router) {}

  postBlog() {
    // Store the blog content (you can save it to a database or other storage)
    // For example, you can store it in an array for demonstration purposes
    const newBlog = {
      content: this.blogContent,
      date: new Date() // You can add a date timestamp
    };

    alert('Blog Posted Successfully!');

    this.router.navigate(['/blog']); // Navigate to the blog list page
  }

}


  
