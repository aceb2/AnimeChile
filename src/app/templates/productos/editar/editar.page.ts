import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animes } from 'src/app/models/models';
import { FirestoreService } from 'src/app/servicios/firestore.service';
//Importaciones de módulos y servicios:
@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  animes: Animes = {
    id: '',
    nombre: '',
    descripcion: '',
  };
//campos para editar de animes
  constructor(private bd: FirestoreService,
              private router: Router,
              private route: ActivatedRoute,
              ) {}
//constructores utilizados
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.cargarAnime(id);
      }
    });
  }
//Contructor para cargar el anime
  cargarAnime(id: string) {
    this.bd.getDoc<Animes>('animes', id).subscribe((animes) => {
      if (animes) {
        this.animes = animes;
      } else {
        this.animes = { id: '', nombre: '', descripcion: ''};
      }
    });
  }

  actualizarAnime(id: string) {

    // Actualiza el anime usando el servicio
    this.bd.updateDoc('animes', id, this.animes).then(() => {
      this.router.navigate(['/listar']);
    })
    .catch((error) => {
      console.error('Error al actualizar anime:', error);
    });
  }
}
