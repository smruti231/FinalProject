import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../Models/blogs';

@Injectable({
  providedIn: 'root'
})
  

export class AllBlogsService {
  blogURL : string = "http://localhost:5163/api/UserBlog";
  constructor(private http : HttpClient) { }

  public getAllBlogs() : Observable<Blogs[]>{
    return this.http.get<Blogs[]>(this.blogURL);
}
  
public addBlogs(blog: Blogs) : Observable<Blogs>{
  return this.http.post<Blogs>(this.blogURL, blog);
}
}
