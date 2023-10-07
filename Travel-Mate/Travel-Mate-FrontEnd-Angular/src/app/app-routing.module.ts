import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { MainComponent } from './Components/main/main.component';
// import { BlogComponent } from './Components/blog/blog.component';
import { CabComponent } from './Components/cab/cab.component';
import { CreateBlogComponent } from './Components/create-blog/create-blog.component';
import { HotelComponent } from './Components/hotel/hotel.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogContentComponent } from './Components/blog-content/blog-content.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { BlogLocComponent } from './Components/blog-loc/blog-loc.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  // { path: 'dashboard', component: DashboardComponent},
  // { path: '', redirectTo : '/dashboard', pathMatch: 'full'},
  { path: 'dashboard/loggedIn', component: DashboardComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomepageComponent }, 
  { path: 'main', component: MainComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'cab', component: CabComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  {path : 'blogloc', component: BlogLocComponent},
  {path: 'blogall', component: BlogContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
