import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
//Importaciones de módulos y servicios:
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firebase: AngularFirestore) { }
//cosntructores

//Metodos y funcionamiento de estos
  createDoc(data: any, path: string, id: string) {

    const collection = this.firebase.collection(path);
    return collection.doc(id).set(data);
  //El método createDoc se utiliza para crear un nuevo documento en una colección de Firebase Firestore. Toma tres argumentos: data (los datos que se desean almacenar en el documento)
  //, path (la ruta de la colección donde se creará el documento) y id (el ID del documento) y crea el id del anime
  }
  getId() {
    return this.firebase.createId();
  }
  //El método getId devuelve un ID único generado por Firebase Firestore.
  // Esto puede ser útil cuando necesitas asignar nuevos IDs a los animes al crearlos.
 
  getCollection<tipo>(path: string) {
    const collection = this.firebase.collection<tipo>(path);
    return collection.valueChanges();
  //El método getCollection se utiliza para recuperar todos los animes de una colección específica y devuelve los datos como un flujo de observables.
  // El tipo de datos de los animes se especifica mediante el parámetro de tipo <tipo>. Esto es útil para obtener una lista de animes. .

  }
  getDoc<tipo>(path: string, id: string) {
    return this.firebase.collection(path).doc<tipo>(id).valueChanges()
   }
   //El método getDoc recupera un anime específico en una colección y devuelve los datos del anime como un flujo de observables
   //Al igual que en el caso anterior, el tipo de datos de los animes se especifican mediante el parámetro de tipo <tipo>.

   updateDoc(path: string, id: string, data: any) {
    return  this.firebase.collection(path).doc(id).update(data);
  }
  //El método updateDoc se utiliza para actualizar una anime existente en una colección. Toma el path (ruta de la colección), 
  //el id del documento que se desea actualizar y los nuevos datos data que se desean guardar en el formulario del anime. 
  //Utiliza update(data) para realizar la actualización.
  
  deleteDoc(path: string, id: string) {
    return this.firebase.collection(path).doc(id).delete();
  //El método deleteDoc se utiliza para eliminar un anime específico en una colección. Toma el path 
  //(ruta de la colección) y el id del documento que se desea eliminar. Utiliza delete() para eliminar el formuilario del anime.
  }
}
