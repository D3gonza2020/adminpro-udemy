import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ] 
}) 
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[] = [];
  desde:number = 0;
  totalRegistros:number = 0;
  cargando:boolean =true;

  constructor(public _usuarioService:UsuarioService,
              public _modalUploadService:ModalUploadService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe(resp => this.cargarUsuarios());
  }

  mostrarModal(id:string){
    this._modalUploadService.mostrarModal('usuarios', id);
  }

  cargarUsuarios(){
    this.cargando = true;

    this._usuarioService.cargarUsuarios(this.desde)
      .subscribe((resp:any) => {
        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
        this.cargando = false;
      })
  }

  cambiarDesde(valor:number){
    let desde = this.desde + valor;
    if(desde >= this.totalRegistros){
      return;
    }

    if(desde < 0){
      return;
    }

    this.desde += valor;    
    this.cargarUsuarios();
  }

  buscarUsuario(termino:string){
    if(termino.length <=0){
      this.cargarUsuarios();
      return;
    }

    this.cargando=true;
    this._usuarioService.buscarUsuarios(termino)
      .subscribe((usuario:Usuario[]) => {
        this.usuarios=usuario;
        this.cargando = false;
      }); 
  }

  borrarUsuario( usuario:Usuario ){    
   
    if(usuario._id === this._usuarioService.usuario._id){
      Swal.fire({
        icon: 'warning',
        title: 'Acción incorrecta',
        text: 'No se puede borrar a sí mismo'
      });
      return;
    }

    Swal.fire({
      title: 'Está seguro?',
      text: "Esta a punto de borrar a " + usuario.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'

    }).then((borrar) => {

      if (borrar.value) {
        this._usuarioService.borrarUsuario(usuario._id)
          .subscribe(borrado =>{               
            if(this.totalRegistros - 1 === this.desde){             
              this.cambiarDesde(-5);
            }
            else{
              this.cargarUsuarios();                 
            }
          });       
      }
    });
  }

  guardarUsuario(usuario:Usuario){
    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }

}
