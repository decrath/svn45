import {Component, Inject, OnInit} from '@angular/core';
import {Usuario} from '../objects/Usuario';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {DataService} from '../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioComponent} from '../usuarios/usuario.component';
import {FormControl} from '@angular/forms';
import { ConfirmarAccionDialogComponent } from '../confirmar-accion-dialog/confirmar-accion-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  formGroup: FormGroup;
  public usuario: Usuario;
  myControl = new FormControl();
  opciones: boolean[] = [true , false];
  constructor(public dialogRef: MatDialogRef<UsuarioComponent>,
              @Inject(MAT_DIALOG_DATA)  public data: Usuario,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              public dialog: MatDialog
  ) {  }

  get modificar() {
      return this.formGroup;
  }

  public guardar() {
    
    this.usuario = {
      id: this.formGroup.get('id').value,
      username: this.formGroup.get('username').value,
      activo: this.formGroup.get('activo').value,
      nombreCompleto: this.formGroup.get('nombreCompleto').value
    };
    this.dialogRef.close(this.usuario);
  }

  cerrarDialogo() {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      id: [this.data.id],
      username: [this.data.username],
      activo: [this.data.activo],
      nombreCompleto: [this.data.nombreCompleto]
    });
  }

}
