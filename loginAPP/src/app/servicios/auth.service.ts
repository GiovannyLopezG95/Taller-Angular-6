import { Injectable } from '@angular/core';
//importar dependencias de firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { reject } from 'q';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
  //Metodos en cada componente
  //funcion: Promise (devuelve un Ok o no)
  registerUser(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  login(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }
  
  //Obtener datos del usuario 
  getAuth(){
    return this.afAuth.authState.pipe(map((auth)=> auth));

  }

  logout(){
    return this.afAuth.auth.signOut();
  }
  
}
