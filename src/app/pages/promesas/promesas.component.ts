import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {    

    this.contarTres().then(msj => console.log('Termino!!', msj))      
           .catch( error => console.error('Error en la promesa',error)); 

   }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {

    return new Promise( (resolve,reject) => {
      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;
        console.log(contador);

        if( contador === 3){
          resolve(true);
          //resolve('OK');
          //reject('Simplemente un error');
          clearInterval(intervalo);
        }
      },1000);
    });    
  }

}
