import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { BlogContentComponent } from './Components/blog-content/blog-content.component';
import { BlogsComponent } from './Components/blogs/blogs.component';

const routes: Routes = [
  {path:'',redirectTo:'/travelMate',pathMatch:'full'},
  {path : 'travelMate/blogs', component:BlogsComponent},
  {path : 'travelMate/blog/:id', component:BlogContentComponent},
  {path: 'travelMate/hotels', component:HotelsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
