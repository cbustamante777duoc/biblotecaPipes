import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitan America';
  areglo:number[] = [1,2,3,4,5,6,7,8,9];
  PI:number = Math.PI;
  porcentaje:number = 0.7876;
  salario:number = 1000000;

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
