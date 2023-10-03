import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent {
  
  blogData=[ 
    {id:1,heading:'Top 10 Best places in Mumbai',username:'By-Thrupthi G',content:'These are the top 10 tourist places in Mumbai you must visit to get the best sight of the city of dreams in India:Gateway of India,Juhu Beach,Elephanta Caves,Colaba Causeway Market, Marine Drive,Victoria Terminus,Film City,Haji Ali,Banganga Tank,Mahalaxmi,Dhobi Ghat',subcontent:'Gateway of India is the best place to visit when you are in Bombay. This was erected in 1924 by George Willet to mark the arrival of King George V and Queen Mary to Mumbai. The Gateway of India is located close to the Taj Mahal Palace and overlooking the huge Arabian Sea.'},
    {id:2,heading:'Top 5 Best places to Eat',username:'',content:''},
    {id:3,heading:'',username:'',content:''},


  ];
  blog:any;

  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(params =>{
      const blogId =+params['id'];
      this.blog=this.blogData.find(blog=>blog.id==blogId);
    });

  }

}
