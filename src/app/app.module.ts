import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/templates/header/header.component';
import {FooterComponent} from './pages/templates/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';

import {HttpClientModule} from '@angular/common/http';
import {SistemaService} from './services/sistema.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {UsuarioComponent} from './usuarios/usuario.component';
import {RajidComponent} from './rajid/rajid.component';
import {Rajid42Component} from './rajid42/rajid42.component';
import {DialogComponent} from './dialog/dialog.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule, MatTreeModule
} from '@angular/material';
import {ConfirmarAccionDialogComponent} from './confirmar-accion-dialog/confirmar-accion-dialog.component';
import {SistemaDialogComponent} from './sistema-dialog/sistema-dialog.component';
import {DialogoRolComponent} from './dialogo-rol/dialogo-rol.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsuarioComponent,
    RajidComponent,
    Rajid42Component,
    DialogComponent,
    ConfirmarAccionDialogComponent,
    SistemaDialogComponent,
    DialogoRolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTreeModule,

  ],
  entryComponents:[
    DialogComponent,
    ConfirmarAccionDialogComponent,
    SistemaDialogComponent,
    DialogoRolComponent
  ],
  providers: [SistemaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
