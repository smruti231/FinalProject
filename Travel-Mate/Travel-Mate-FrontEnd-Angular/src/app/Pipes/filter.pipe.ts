import { Pipe, PipeTransform } from '@angular/core';
import { Blogs } from '../Models/blogs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputs: Blogs [], id: number): Blogs []{
    if(id == null){
      return inputs;
    }
    else{
      return inputs.filter(b => b.locId==id)
    }
  }

}
