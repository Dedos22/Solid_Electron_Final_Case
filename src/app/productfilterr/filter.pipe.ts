import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filter: string, Name:string): any[] {
    const result:any =[];
    if(!value || filter==='' || Name ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[Name].trim().toLowerCase().includes(filter.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
