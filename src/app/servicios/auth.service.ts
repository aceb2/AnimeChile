import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from '../models/models';
//Importaciones de módulos y servicios:
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire: AngularFireAuth ) { }
//contructores
  login(correo: string, password: string){
    return this.authFire.signInWithEmailAndPassword(correo,password)
  }
  //El método login se utiliza para realizar la autenticación de un usuario. 
  logut(){
    this.authFire.signOut();
  }
  //El método logut se utiliza para cerrar la sesión del usuario actual.
  registerUsers(datos: UserI){
    return this.authFire.createUserWithEmailAndPassword(datos.correo,datos.password);
  }
  //El método registerUsers se utiliza para registrar un nuevo usuario en Firebase Authentication
  stateUser(){
    return this.authFire.authState
  //El método stateUser devuelve el estado de autenticación actual del usuario. 
  }
//servicios
  async getUid() {
    const user = await this.authFire.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
   }
}
