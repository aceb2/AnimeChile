import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPageRoutingModule } from './agregar-routing.module'
import { AgregarPage } from './agregar.page';
//Importaciones de módulos y servicios:
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage]
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class AgregarPageModule {}
//se exporta toda la clase a AgregarPageModule 
