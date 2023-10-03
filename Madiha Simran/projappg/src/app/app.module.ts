import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { HotelComponent } from './hotel/hotel.component';
import { BlogComponent } from './blog/blog.component';
import { CabComponent } from './cab/cab.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    MainComponent,
    HotelComponent,
    BlogComponent,
    CabComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent},
      {path: 'main', component: MainComponent},
    ]),
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
