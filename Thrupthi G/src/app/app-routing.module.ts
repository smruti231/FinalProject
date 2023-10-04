import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { BlogContentComponent } from './Components/blog-content/blog-content.component';
import { BlogsComponent } from './Components/blogs/blogs.component';

const routes: Routes = [
  {path : 'blogs', component:BlogsComponent},

  {path : 'all', component:BlogContentComponent},
  

  {path:'',redirectTo:'/blogs',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
