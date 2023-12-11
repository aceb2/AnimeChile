import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroPage } from './registro.page';
//Importaciones de módulos y servicios:

const routes: Routes = [
  {
    path: '',
     // La ruta raíz, es decir, la página principal de la aplicación
    component: RegistroPage
    // La ruta raíz, es decir, la página principal de la aplicación
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class RegistroPageRoutingModule {}
//se exporta toda la clase a RegistroPageRoutingModule 