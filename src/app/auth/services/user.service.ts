import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import { IUserLoged } from 'src/app/interfaces/user';

interface response {
  message: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: IUserLoged = {
    isLoged: false,
    email: '',
    uid: '',
  };

  get userLoged(): IUserLoged {
    return this.user;
  }

  constructor(private _firebase: AngularFireAuth) {}

  async firebaseLogIn(email: string, password: string): Promise<response> {
    try {
      this.userLoged.isLoged = true;
      const resp = await this._firebase.signInWithEmailAndPassword(
        email,
        password
      );
      return { message: 'Logeado correctamente', status: true };
    } catch (error: any) {
      console.log(error);
      return { message: 'Error al logearse', status: false };
    }
  }

  async firebaseLogOut(): Promise<any> {
    try {
      this.userLoged.isLoged = false;
      return this._firebase.signOut();
    } catch (error: any) {
      throw new Error('Error en el logOut', error);
    }
  }

  async getAuthState(): Promise<response> {
    let statusResp: boolean = false;
    let messageResp: string = '';
    try {
      const userLog = await this._firebase.authState;
      userLog.subscribe((user) => {
        if (user) {
          this.userLoged.email = user.email!;
          this.userLoged.uid = user.uid;
          this.userLoged.isLoged = true;
          statusResp = true;
          messageResp = 'Usuario logeado';
        } else {
          this.userLoged.email = '';
          this.userLoged.uid = '';
          this.userLoged.isLoged = false;
          statusResp = false;
          messageResp = 'No hay usuario logeado';
        }
      });
      return { message: messageResp, status: statusResp };
    } catch (error: any) {
      messageResp = 'Error al encontrar la session del usuario' + error;
      statusResp = false;
      return { message: messageResp, status: statusResp };
    }
  }
}
