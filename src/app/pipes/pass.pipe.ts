import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = true): any {

    return (mostrar) ? '*'.repeat(value.length) : value;

    // if (mostrar) {
    //   '*'.repeat(value.length);
    // }

    // return value;


  }


}
