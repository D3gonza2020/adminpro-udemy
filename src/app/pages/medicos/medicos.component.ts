import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';
import { ModalUploadService } from '../../services/service.index';

import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit {

  medicos:Medico[] = [];
  cargando:boolean =true;

  constructor(public _medicoService:MedicoService,
             public _modalUploadService:ModalUploadService) { }

  ngOnInit(): void {
    this.cargarMedicos();    
  } 

  cargarMedicos(){
    this.cargando = true;

    this._medicoService.cargarMedicos()
      .subscribe(medicos => this.medicos = medicos);
      this.cargando = false;
  }

  buscarMedico(termino:string){
    if(termino.length <=0){
      this.cargarMedicos();
      return;
    }

    this.cargando=true;
    this._medicoService.buscarMedicos(termino)
        .subscribe(medicos => {
          this.medicos = medicos;
          this.cargando = false;
        });
  }

  borrarMedico(medico:Medico){
    Swal.fire({
      title: 'Está seguro?',
      text: "Esta a punto de borrar a " + medico.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'

    }).then((borrar) => {

      if (borrar.value) {
        this._medicoService.borrarMedico(medico._id)
          .subscribe(() => this.cargarMedicos());       
      }
    });
  }

}
