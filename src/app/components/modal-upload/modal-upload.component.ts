import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import Swal from 'sweetalert2'
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: [
  ]
})
export class ModalUploadComponent implements OnInit {
  
  imagenSubir:File;
  imagenTemp:string | ArrayBuffer;
  @ViewChild('inputFile') inputFile: ElementRef;

  constructor(public _subirArchivoService:SubirArchivoService,
              public _modalUploadService:ModalUploadService) {
    
   }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.imagenTemp=null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
    this.inputFile.nativeElement.value = "";
  }

  seleccionImage(archivo:File){   
 
    if(!archivo){
      this.imagenSubir = null;
      return;
    }

    if(archivo.type.indexOf('image') < 0){
      Swal.fire({
        icon: 'warning',
        title: 'Sólo Imágenes',
        text: 'El archivo seleccionado no es una imagen'
      });
      this.imagenSubir = null;
      return;
    }
    
    this.imagenSubir = archivo;

    let reader = new FileReader();
    reader.readAsDataURL(archivo);  
    reader.onloadend = () => this.imagenTemp = reader.result;   
  }

  subirImagen(){
    this._subirArchivoService.subirArchivo(this.imagenSubir, 
      this._modalUploadService.tipo, this._modalUploadService.id)
      .then(resp => {

        //console.log(resp);
        this._modalUploadService.notificacion.emit(resp);
        this.cerrarModal();

      })
      .catch(err => {
        console.log('Error en la carga...');
      });
  }

}
 