import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
// import { BlogComponent } from './Components/blog/blog.component';
import { CabComponent } from './Components/cab/cab.component';
import { CreateBlogComponent } from './Components/create-blog/create-blog.component';
import { HotelComponent } from './Components/hotel/hotel.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MainComponent } from './Components/main/main.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogContentComponent } from './Components/blog-content/blog-content.component';
import { BlogLocComponent } from './Components/blog-loc/blog-loc.component';
import { FilterPipe } from './Pipes/filter.pipe';
// import { CityFilterPipe } from './Pipes/city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    MainComponent,
    HotelComponent,
    CabComponent,
    CreateBlogComponent,
    LandingPageComponent,
    BlogsComponent,
    BlogContentComponent,
    BlogLocComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'homepage', component: HomepageComponent},
      {path: 'main', component: MainComponent},
    ]),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
