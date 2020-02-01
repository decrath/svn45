import { Component , OnInit , ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { SistemaService } from '../services/sistema.service';
import { FormBuilder } from '@angular/forms';
import { Usuario } from '../objects/Usuario';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTable } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {ConfirmarAccionDialogComponent} from '../confirmar-accion-dialog/confirmar-accion-dialog.component';
import {GeneralResponse} from '../objects/GeneralResponse';
import {newLineWithIndentation} from 'tslint/lib/utils';


@Component({
  selector: 'app-servicio-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  @ViewChild('usuariosTable', {static: false}) usuariosTable: MatTable<Usuario>;
  usuarios: Usuario[];
  visualizacionDeColumnas: string[ ] = ['id' , 'nombreUsuario' , 'nombreCompleto', 'activo' , 'opciones'];
  usuarioSeleccionado: Usuario;
  responseUsuario: GeneralResponse<Usuario>;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private sistemaService: SistemaService,
              public dialog: MatDialog) {
    dataService.usuario = this;

  }

  ngOnInit( ) {
    this.consultarUsuarios( );
  }

  consultarUsuarios( ) {
    this.sistemaService.traerTodosLosUsuarios().subscribe(resultado => {
      // @ts-ignore
      this.usuarios = resultado.data;
    });
  }

  agregarUsuario(): void {
    this.usuarioSeleccionado = {
      id: null,
      username: '',
      nombreCompleto: '',
      activo: null
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1000',
      data: this.usuarioSeleccionado
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado !== undefined) {
        this.usuarios.push(resultado);
        this.usuariosTable.renderRows();
      }
    });
  }

  modificarUsuario(usuario: Usuario): void {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width: '1000',
        panelClass: 'customDialog',
        data: usuario
      });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado !== undefined) {
        this.sistemaService.actualizarLosUsuarios(resultado).subscribe(respuesta => {
            this.responseUsuario = respuesta;
            if (this.responseUsuario.responseStatus.errorCode > 0) {
              window.alert('Error fatal\n' + JSON.stringify(this.responseUsuario.responseStatus.errores));
              console.log(JSON.stringify(this.responseUsuario.responseStatus.errores));
            } else {
              console.log('El diálogo se cerró y guardo de la siguiente manera:');
              this.usuarioSeleccionado = resultado;
              this.usuarios.splice(this.usuarios.indexOf(usuario), 1, this.usuarioSeleccionado);
              this.usuariosTable.renderRows();
              console.log(this.usuarioSeleccionado);
            }
        });

      }

    });
  }

  eliminarUsuario(usuario: Usuario ): void {
    const  dialogRef = this.dialog.open(ConfirmarAccionDialogComponent, {
      width: '1000',
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);

      }
    });
  }

}
