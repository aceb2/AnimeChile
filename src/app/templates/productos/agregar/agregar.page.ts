import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animes } from 'src/app/models/models';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';
//Importaciones de módulos y servicios:
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
//clase
  animes: Animes={
    id: '',
    nombre: '',
    descripcion: '',
  }
  //campos para agregar de animes 
  constructor(
              private auth: AuthService,
              private firestore: FirestoreService,
              private router: Router,
  ) { }
//constructores utilizados
  ngOnInit() {
  }

  agregarAnimes() {
    // Genera un ID único para el anime
    const id = this.firestore.getId();

    // Agrega el campo 'id' al objeto 'animes'
    this.animes.id = id;

    // Agrega el anime usando el servicio
    this.firestore.createDoc(this.animes, 'animes', id)
      .then(() => {
        this.router.navigate(['/listar']);
      })
      .catch(error => {
        console.error('Error al agregar anime:', error);
      });
  }
//campos
  camposIncompletos() {
    const { nombre, descripcion } = this.animes;
    return !nombre ||  !descripcion ;
  }

}
