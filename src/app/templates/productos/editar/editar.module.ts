import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarPageRoutingModule } from './editar-routing.module';
import { EditarPage } from './editar.page';
//Importaciones de módulos y servicios:
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPageRoutingModule
  ],
  declarations: [EditarPage]
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class EditarPageModule {}
//se exporta toda la clase a EditarPageModule
