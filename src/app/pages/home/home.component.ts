import {Component, OnInit, ViewChild} from '@angular/core';
import {SistemaService} from '../../services/sistema.service';
import {FormBuilder} from '@angular/forms';
import {Sistema} from '../../objects/Sistema';
import {Response} from '../../objects/Response';
import {DataService} from '../../services/data.service';
import {MatDialog, MatTable} from '@angular/material';
import {ConfirmarAccionDialogComponent} from '../../confirmar-accion-dialog/confirmar-accion-dialog.component';
import {SistemaDialogComponent} from '../../sistema-dialog/sistema-dialog.component';
import {GeneralResponse} from 'src/app/objects/GeneralResponse';
import {Rol} from 'src/app/objects/Rol';
import {ResponseRolesDatum} from 'src/app/objects/ResponseRolesDatum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('sistemaTable' , {static: false })sistemaTable: MatTable<Sistema>;
  @ViewChild('rolesTable' , {static: false })rolesTable: MatTable<Sistema>;

  sistemas: Sistema[];
  response: Response;
  visualizacionColumnas: string[] = ['codigo' , 'descripcion' , 'borrable' , 'opciones'];
  displayedColumnsRol: string[] = ['id' , 'codigo', 'nombre'];
  sistemaSeleccionado: Sistema;
  responseSistema: GeneralResponse<Sistema>;
  roles: Rol[];
  responseDatum: ResponseRolesDatum;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              public sistemaService: SistemaService,
              public dialog: MatDialog) {
    dataService.home = this;
  }

  ngOnInit() {
    this.consultarSistemas();
  }

  selectSistema(sistema: Sistema) {
    this.sistemaSeleccionado = sistema;
    console.log('SISTEMA SELECCIONADO: ' + JSON.stringify(this.sistemaSeleccionado));
  }

  consultarSistemas() {
    console.log('Calling REST api');
    this.sistemaService.traerTodosLosSistemas().subscribe(resultado => {
      this.response = resultado;
      this.sistemas = this.response.sistemas;
    });

  }

  agregarDato(): void {
    this.sistemaSeleccionado = {
      id: null,
      codigo: '',
      descripcion: '',
      borrable: null,
      };
    const dialogRef = this.dialog.open(SistemaDialogComponent, {
      width: '500px',
      data: this.sistemaSeleccionado,
    });

    dialogRef.afterClosed().subscribe((resultado => {

      if (resultado !== undefined) {
        this.sistemas.push(resultado);
        this.sistemaTable.renderRows();
      }

    }));
  }

  modificarDatoSistema(sistema: Sistema): void {

    const dialogRef = this.dialog.open(SistemaDialogComponent, {
      width: '100',
      data: sistema
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado !== undefined) {
        this.sistemaSeleccionado = resultado;
        this.sistemas.splice(this.sistemas.indexOf(sistema), 1, this.sistemaSeleccionado);
        this.sistemaTable.renderRows();
        console.log(this.sistemaSeleccionado);
      }
    });

  }

  eliminarSistema(sistema: Sistema): void {
    const dialogRef = this.dialog.open(ConfirmarAccionDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(resultado => {

      if (resultado) {
        this.sistemas.splice(this.sistemas.indexOf(sistema), 1);
        this.sistemaTable.renderRows();
      }

      console.log('Dato eliminado');
    });
  }

  desplegarInformacion(sistema: Sistema) {
      this.sistemaService.traerRolesPorSistema(sistema).subscribe(resultado =>{
        this.responseDatum = resultado;
        if (this.responseDatum.responseStatus.errorCode === 0) {
          this.roles = this.responseDatum.datum.roles;
        }
      });

  }


}
