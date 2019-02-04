import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
name:'emptitle'
})

export class EmpPipe implements PipeTransform{

  transform(value:string,name:string):string{
  return "mr "+name
  }

}
