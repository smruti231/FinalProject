import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogContentComponent } from './Components/blog-content/blog-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    NavBarComponent,
    BlogsComponent,
    BlogContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
