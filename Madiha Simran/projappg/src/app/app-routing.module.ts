import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';
import { HotelComponent } from './hotel/hotel.component';
import { BlogComponent } from './blog/blog.component';
import { CabComponent } from './cab/cab.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';


const routes: Routes = [ { path: '', component: HomepageComponent }, // Your first main page
{ path: 'main', component: MainComponent },
{ path: 'hotel', component: HotelComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'cab', component: CabComponent },
{ path: 'create-blog', component: CreateBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
