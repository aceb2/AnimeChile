import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

//Importaciones de módulos y servicios:
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
 // Variable que almacena los datos de usuario
export class LoginPage implements OnInit {

  // Función para cargar los datos de usuario
  credenciales= {
    correo: '',
    password: ''
  }
  
//crerdenciales para  inicio de seccion
  constructor(private router: Router,
              private auth: AuthService,
              private alertController: AlertController) { 
                 }
                 public alertButtons = [
                  {
                    text: 'OK',
                    cssClass: 'alert-button-confirm',
                  },
                ];
                 async presentAlert() {
                  const alert = await this.alertController.create({
                    header: 'Usuario',
                    message: 'Ingresado Correctamente',
                    buttons: ['OK'],
                  });
              
                  await alert.present();
                }                             
  ngOnInit() {
  }
  //constructores utilizados

  async logeando(){
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error =>{
      console.log('error');
    })
    if (res){
      this.router.navigate(['/home']);
    }

  }
//metodos
}
