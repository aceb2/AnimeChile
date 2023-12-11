import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
//Importaciones de módulos y servicios:
const routes: Routes = [
  {
    path: '',
    // La ruta raíz, es decir, la página principal de la aplicación
    component: HomePage,
    // La ruta raíz, es decir, la página principal de la aplicación
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class HomePageRoutingModule {}
//se exporta toda la clase a HomePageRoutingModule