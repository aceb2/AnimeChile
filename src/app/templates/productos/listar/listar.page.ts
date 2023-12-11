import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animes } from 'src/app/models/models';
import { FirestoreService } from 'src/app/servicios/firestore.service';
//Importaciones de módulos y servicios:
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
//se exporta toda la clase de ListarPage  y luego se implementa en OnInit
  animes: Animes[]= [];

  constructor(private bd: FirestoreService,
              private router: Router,
              private alertController: AlertController
// Inyección de un servicios a traves del contructor
              ) { }
  ngOnInit() {
    this.getanimes();
  }
//metodo que trae los animes en la vista de listar
  getanimes() {
    this.bd.getCollection<Animes>('animes').subscribe(animes => {
      this.animes = animes;
    });
  }
//metodo que elimina los animes en la vista de listar
  eliminaranime(id: string) {
    this.bd.deleteDoc('animes', id)
      .then(() => {
        this.getanimes();
      })
      .catch(error => {
        console.error('Error al eliminar Anime:', error);
      });
  }

}
