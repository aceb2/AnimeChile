import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { AlertController } from '@ionic/angular';

//Importaciones de módulos y servicios:
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
//Aquí se define el componente 'RegistroPage' con un selector
export class RegistroPage implements OnInit {

//exportamos la clase RegistroPage a OnInit
  datos: UserI = {
    username: '',
    correo:'',
    uid: this.firestore.getId(),
    password: '',
  }
// Esta variable se utiliza para almacenar los datos del usuario que se recopilarán durante el proceso de registro
  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private router: Router,
              private alertController: AlertController) {   
              }
              public alertButtons = [
                {
                  text: 'OK',
                  cssClass: 'alert-button-confirm',
                },
              ];
//El constructor de la clase se utiliza para inyectar los servicios necesarios en el componente.
  ngOnInit() {
  }
//Este es un método del ciclo de vida de Angular que se ejecuta cuando se inicia el componente. 
  async register() {
    
    try {
      // Registra al usuario en Firebase Authentication
      const authResult = await this.auth.registerUsers(this.datos);
  
      // Comprueba si el usuario se registró con éxito
      if (authResult && authResult.user) {
        console.log('Usuario registrado con éxito en Firebase Authentication:', authResult);
        
        // Almacena los datos del usuario en Firestore Database
        const path = 'Users';
        this.datos.uid = authResult.user.uid; // Utiliza el ID de autenticación de Firebase
        this.datos.password = ''; // No es necesario almacenar la contraseña guardada anteriormente
        await this.firestore.createDoc(this.datos, path, this.datos.uid);
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      //En caso de dar error se mostrara el mesaje de arriba
    }
  }
  

}
