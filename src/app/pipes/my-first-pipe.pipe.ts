import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstPipe'
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value: string, todas:boolean = false): string {

    //convierte todo a miniculas
    value = value.toLowerCase();

    //va a seperar el valor por los espacios en blanco
    let nombres = value.split(' ');


    if (todas) {
      nombres = nombres.map(nombres =>{
        return nombres[0].toUpperCase() + nombres.substr(1);
      })

      //unir los nombres por un espacio
      return nombres.join(' ');
    }else{
      //la primera letra de la primera palabra a mayuscula y se une todo
      nombres[0] = nombres[0][0].toUpperCase()+ nombres[0].substr(1);

    }

    //une todos los nombres por espacio
    return nombres.join(' ');

  }

}
