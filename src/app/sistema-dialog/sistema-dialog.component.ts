import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../services/data.service';
import {Sistema} from '../objects/Sistema';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HomeComponent} from '../pages/home/home.component';
import {SistemaService} from '../services/sistema.service';

@Component({
  selector: 'app-sistema-dialog',
  templateUrl: './sistema-dialog.component.html',
  styleUrls: ['./sistema-dialog.component.css']
})
export class SistemaDialogComponent implements OnInit {

  formGroup: FormGroup;
  borrables: ['true', 'false'];
  public sistema: Sistema;
  myControl = new FormControl();
  opciones: boolean[] =  [true , false];

  constructor(public dialogRef: MatDialogRef<HomeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Sistema,
              private formBuilder: FormBuilder,
              ) {
  }

  get modifica() {
    return this.formGroup;
  }

  guardar() {
    this.sistema = {
      id: this.formGroup.get('id').value,
      codigo: this.formGroup.get('codigo').value,
      descripcion: this.formGroup.get('descripcion').value,
      borrable: this.formGroup.get('borrable').value,
    };
    
    this.dialogRef.close(this.sistema);
  }

  cancelar() {
    this.dialogRef.close();

  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [this.data.id],
      codigo: [this.data.codigo],
      descripcion: [this.data.descripcion],
      borrable: [this.data.borrable]
    });
  }

}
