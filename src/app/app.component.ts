import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'capitan america';
  nombre2: string = 'pEteR pArkER';
  areglo:number[] = [1,2,3,4,5,6,7,8,9];
  PI:number = Math.PI;
  porcentaje:number = 0.7876;
  salario:number = 1000000;
  fecha: Date = new Date();
  idioma:string = 'es';
  video:string = 'https://www.youtube.com/embed/VAkio68d51A';

  nuevaPromesa = new Promise<string>((resolve)=>{

    setTimeout(() => {
      resolve('llego el dato a los 4.5 segundo')
    }, 4500);
  });

  heroe = {
    nombre:'Peter Parker',
    clave:'Spiderman',
    edad:30,
    direccion:{
      calle:'Primera',
      casa:20
    }
  }


}
