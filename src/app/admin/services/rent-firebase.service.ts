import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, combineLatest, map } from 'rxjs';
import { client } from 'src/app/interfaces/client';
import { rentDates } from 'src/app/interfaces/rentDates';
import { ClientxRentService } from './clientxRent.service';

@Injectable({
  providedIn: 'root',
})
export class RentFirebaseService {
  rentSelected?: rentDates;
  rentCollection?: AngularFirestoreCollection<rentDates>;
  clientCollection?: AngularFirestoreCollection<client>;

  constructor(
    private _firebase: AngularFirestore,
    private _ClientxRentService: ClientxRentService
  ) {}

  insertarAlquiler(rent: rentDates): void {
    try {
      const id = this._firebase.createId();
      this._firebase.collection('rent').doc(id).set(rent);
      this._ClientxRentService.insertarRentaxCliente(rent.clientId, id);
    } catch (error) {
      console.log('Insert error: ', error);
    }
  }

  getAlquileres() {
    return this._firebase
      .collection<rentDates>('rent')
      .valueChanges({ idField: 'id' });
  }

  deleteRent(id: string) {
    this._firebase.collection('rent').doc(id).delete();
  }

  updateRent(rent: rentDates) {
    try {
      this._firebase.collection('rent').doc(rent.id).update(rent);
    } catch (error) {
      console.log('Update error: ', error);
    }
  }
}
