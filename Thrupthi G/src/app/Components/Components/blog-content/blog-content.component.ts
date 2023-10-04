import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent {
  selectedLocation:string='';
  
  
  blogs=[
    {title:'Top 10 Best places in Chennai',username:'Thrupthi',location:'Chennai',content:'These are the top 10 tourist places in Mumbai you must visit to get the best sight of the city of dreams in India:Gateway of India,Juhu Beach,Elephanta Caves,Colaba Causeway Market, Marine Drive,Victoria Terminus,Film City,Haji Ali,Banganga Tank,Mahalaxmi,Dhobi Ghat'},
    {title:'Top 10 Best places in Kolkata',username:'Thrupthi',location:'Kolkata',content:'Victoria Memorial, Howrah Bridge, Botanical Garden, New Town Eco Park, Nicco Park, Mother Teressa House, Fort William, Tagore’s House (Joransanko Thakur Bari), Marble Palace, Dakshineswar Kali Temple, Alipore Zoological Gardens, Kalighat Kali Temple, and many more.'},
    {title:'Top 10 Best places in Banglore',username:'Thrupthi',location:'Banglore',content:'Victoria Memorial, Howrah Bridge, Botanical Garden, New Town Eco Park, Nicco Park, Mother Teressa House, Fort William, Tagore’s House (Joransanko Thakur Bari), Marble Palace, Dakshineswar Kali Temple, Alipore Zoological Gardens, Kalighat Kali Temple, and many more.'}

  ];
  
  
}
