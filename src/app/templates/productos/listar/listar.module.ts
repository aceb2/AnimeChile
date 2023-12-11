import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListarPageRoutingModule } from './listar-routing.module';
import { ListarPage } from './listar.page';
//Importaciones de módulos y servicios:
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPageRoutingModule
  ],
  declarations: [ListarPage]
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class ListarPageModule {}
//se exporta toda la clase a ListarPageModule