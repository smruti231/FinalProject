import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDistComponent } from './Components/view-dist/view-dist.component';

const routes: Routes = [
  {path: '', redirectTo: "geolocation", pathMatch:'full'},
  {path : 'geolocation', component: ViewDistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
