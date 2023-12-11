import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
//Importaciones de módulos y servicios:
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class LoginPageModule {}
//se exporta toda la clase a LoginPageModule