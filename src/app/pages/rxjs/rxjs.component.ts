import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber,Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
   
    //Para escuchar todo el trabajo que esta haciendo
    //el observador necesitamos subscribirnos
    //subscribe: tiene 3 callbacks
    //Primero cuando se recibe informacion con el next
    //Segundo cuando ocurra algun error
    //Tercero cuando termine el observador

    //NOTA: todos los observables tienen
    //un pipe (tuberia para transformar la informacion)
    //retry:repite el numero de intentos que se desea
    //hacer la peticion
    this.subscription = this.regresaObservable()
    /*.pipe(
      retry(2)
    )*/
    .subscribe( 
      numero => console.log('Subs', numero),//1
      error => console.error('Error en el obs',error),//2
      () => console.log('El obs Termino!!!')//3     
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log('La página se va ha cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;

      let intervalo = setInterval( () => {
        contador++;

        //Cambio para ver el operador map
        const salida = {
          valor: contador
        };

        //next: va notificar la llegada
        //de cada incremento del contador        
        //observer.next(contador);

        observer.next(salida);

        //cambio para validar el unsubscribe
        /*
        if(contador === 3){
          //Detenemos el intervalo pero no la escucha
          //del observable
          clearInterval(intervalo);
          //complete:con esto notificamos que ya termino
          //el observable
          observer.complete();
        }
        */

        /*
        if(contador === 2){
          //clearInterval(intervalo);
          observer.error('Auxilio!!!');
        }
        */
      }, 1000);
    })
    //cambio para explicar el operador map
    //map:transforma la informacion y regresa
    //lo que se neesite
    .pipe(
      map( resp => {
          return resp.valor;
      }),
      //Operador filter
      //recibe como argumento una funcion
      //y esta a su vez recibe el valor y el index
      filter( (valor, index) => {
        //En este ejecicio filtramos solo 
        //los impares
        if( (valor % 2) === 1){
          //impar
          return true;
        }else{
          //para
          false;
        }
      })
    );  
  }

}
