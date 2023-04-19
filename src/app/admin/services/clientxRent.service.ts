import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import {
  Client_Rents,
  dataRent_ClientTable,
} from '../../interfaces/ClientxRent';
import { Observable, combineLatest, map } from 'rxjs';
import { rentDates } from 'src/app/interfaces/rentDates';
import { client } from 'src/app/interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class ClientxRentService {
  constructor(private _firebase: AngularFirestore) {}
  rentCollection?: AngularFirestoreCollection<rentDates>;
  clientCollection?: AngularFirestoreCollection<client>;

  insertarRentaxCliente(Idclient: string, idRent: string): void {
    const objIdClientxIdRent = { Idclient, idRent };
    this._firebase.collection('client-rent').add(objIdClientxIdRent);
  }

  getRentaxCliente(): Observable<Client_Rents[]> {
    return this._firebase
      .collection<Client_Rents>('client-rent')
      .valueChanges();
  }
}
