import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  cards=[
    {id:1,heading:'Top 10 Best Places in Mumbai',imageUrl:'assets/images/blogs/mumbai1.jpg',content:'Imagine the hive that is a global city like, London, then times it by 100! That’s what Mumbai is like. Filled to the brim with incredible culture, historic buildings and the most amazing food, there is so many of the best things to do in Mumbai across the whole city.'},
    {id:2,heading:'Top 5 Resturants',imageUrl:'assets/images/blogs/mumbai2.jpg',content:'Vada Paav may be the superstar of Mumbai’s street food, but when it comes to dining at a proper restaurant, it is not only about the food. One also visits a restaurant or café for its ambience, décor, quality of food, live music and much more.'},
    {id:3,heading:'Shopping',imageUrl:'assets/images/blogs/mumbai3.jpg',content:'There are tons of exciting shopping places in Mumbai that will make you want to explore them again and again! Mumbai is a macrocosm of life, vibrancy, buzz, inter-cultural bonding, nostalgia and charm that makes it a heady cocktail for visitors and tourists. Here’s taking a look –'}
  ];
  constructor(private router:Router){}
  readMore(blogId:number){
    this.router.navigate(['/blog',blogId])
  }
  

}
