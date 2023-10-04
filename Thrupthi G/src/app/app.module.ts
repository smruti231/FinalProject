import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogContentComponent } from './Components/blog-content/blog-content.component';
import { HotelBlrComponent } from './Components/hotel-blr/hotel-blr.component';
import { HotelKolComponent } from './Components/hotel-kol/hotel-kol.component';
import { HotelBhuvComponent } from './Components/hotel-bhuv/hotel-bhuv.component';
import { HotelJaiComponent } from './Components/hotel-jai/hotel-jai.component';
import { FormsModule } from '@angular/forms';
import { CityFilterPipe } from './Pipe/city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    NavBarComponent,
    BlogsComponent,
    BlogContentComponent,
    HotelBlrComponent,
    HotelKolComponent,
    HotelBhuvComponent,
    HotelJaiComponent,
    CityFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
