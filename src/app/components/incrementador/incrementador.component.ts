import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  @Input('nombre') leyenda:string  = 'Leyenda';
  @Input() progreso:number = 50;

  //NOTA: para @Input y @Output
  //Si no ponemos nada dentro de los parentesis
  //usamos el nombre incrementaProgress en el html
  //caso contrario usamos el nombre actualizaValorProgress
  //en el html
  @Output('actualizaValorProgress') incrementaProgress:EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress:ElementRef;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  onChanges(newValue:number){

    console.log(newValue);
    
    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso=newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.incrementaProgress.emit(this.progreso);
  }

  cambiarValor(valor:number){    
    
    this.progreso += this.progreso === 100 && valor > 0 || 
                     this.progreso === 0 && valor < 0 ? 0 :
                     valor;    

    this.incrementaProgress.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
