import { Component, OnInit } from '@angular/core';
import {  ResponseRolesDatum } from 'src/app/objects/ResponseRolesDatum';
import { Rol } from 'src/app/objects/Rol';

@Component({
  selector: 'app-dialogo-rol',
  templateUrl: './dialogo-rol.component.html',
  styleUrls: ['./dialogo-rol.component.css']
})


export class DialogoRolComponent implements OnInit {

  displayedColumnsRol: string[] = ['id' , 'codigo', 'nombre']; 
  roles: Rol[];
  responseDatum: ResponseRolesDatum;
  constructor() { }

  ngOnInit() {
  }

}
