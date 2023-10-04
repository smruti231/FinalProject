import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(blogs:any[],selectedCity:string): any[] {
    if(!selectedCity){
      return blogs;
    }
    return blogs.filter((blog) => blog.location === selectedCity);
    
  }

}
