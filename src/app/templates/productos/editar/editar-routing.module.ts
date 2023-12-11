import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPage } from './editar.page';
//Importaciones de módulos y servicios:
const routes: Routes = [
  {
    path: '',
     // La ruta raíz, es decir, la página principal de la aplicación
    component: EditarPage
    // El componente que se debe cargar cuando se accede a la ruta raíz
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
//Esto es un decorador de módulo en Angular que configura los módulos de la pagina con sus funcionalidades
export class EditarPageRoutingModule {}
//se exporta toda la clase a EditarPageRoutingModule
