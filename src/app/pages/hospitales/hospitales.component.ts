import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/service.index';
import { Hospital } from '../../models/hospital.model';
import { ModalUploadService } from '../../services/service.index';

import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: [
  ]
})
export class HospitalesComponent implements OnInit {

  hospitales:Hospital[] = []; 
  cargando:boolean =true;

  constructor(public _hospitalService:HospitalService,
    public _modalUploadService:ModalUploadService) { }

  ngOnInit(): void {
    this.cargarHospitales();
    this._modalUploadService.notificacion.subscribe(resp => this.cargarHospitales());
  }

  buscarHospital(termino:string){
    if(termino.length <=0){
      this.cargarHospitales();
      return;
    } 

    this.cargando=true;
    this._hospitalService.buscarHospital(termino)
      .subscribe((hospitales:Hospital[]) => {
        this.hospitales=hospitales;
        this.cargando = false;
      }); 
  }

  cargarHospitales(){ 
    this.cargando = true;

    this._hospitalService.cargarHospitales() 
      .subscribe(resp => this.hospitales = resp);
      this.cargando = false;
  }

  mostrarModal(id:string){
    this._modalUploadService.mostrarModal('hospitales', id);
  }

  borrarHospital( hospital:Hospital ){ 
    //let nombreHospital = this.hospitales.filter(hospital => hospital._id === id)[0].nombre;

    Swal.fire({
      title: 'Está seguro?',
      text: "Esta a punto de borrar él/la " + hospital.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'

    }).then((borrar) => { 

      if (borrar.value) {
        this._hospitalService.borrarHospital(hospital._id)
          .subscribe(borrado => this.cargarHospitales());       
      }
    });
  }

  crearHospital(){       
    (async () => {     
        const { value: nombre } = await Swal.fire({
        icon: 'info',
        title: 'Crear Clínica/Hospital',
        input: 'text',
        inputPlaceholder: 'Ingrese el Nombre del hospital', 
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',    
        inputValidator: (value) => {
          if (!value) {
            return 'Debe ingresar el nombre del hospital'
          }  
        }
      });     
      
      this._hospitalService.crearHospital(nombre.toString())
          .subscribe(() => this.cargarHospitales());

      })()
  }

  actualizarHospital(hospital:Hospital){
    this._hospitalService.actualizarHospital(hospital).subscribe();
  }

}
