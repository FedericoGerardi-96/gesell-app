import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { client } from '../../interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class clientFirebaseService {
  clientSelected?: client;
  constructor(private firebase: AngularFirestore) {}

  insertarCliente(client: client): Promise<any> {
    return this.firebase.collection('clients').add(client);
  }

  getClientxId(id: string): Observable<any> {
    return this.firebase
      .collection<client>('clients')
      .doc(id)
      .valueChanges({ idField: 'id' });
  }

  getClients(): Observable<client[]> {
    try {
      return this.firebase
        .collection<client>('clients')
        .valueChanges({ idField: 'id' });
    } catch (error: any) {
      throw new Error('Error al obtener los clientes', error);
    }
  }

  updateClient(client: client): Promise<any> {
    return this.firebase.collection('clients').doc(client.id).update(client);
  }

  deleteClient(id: string): Promise<any> {
    return this.firebase.collection('clients').doc(id).delete();
  }
}
