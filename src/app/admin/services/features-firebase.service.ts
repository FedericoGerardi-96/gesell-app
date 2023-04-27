import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Featured } from 'src/app/interfaces/Featured';

@Injectable({
  providedIn: 'root',
})
export class FeaturesFirebaseService {
  featuredSelected?: Featured;
  constructor(private _firebase: AngularFirestore) {}

  insertFeature(feature: Featured): Promise<any> {
    return this._firebase.collection('feature').add(feature);
  }

  getFeatures(): Observable<Featured[]> {
    try {
      return this._firebase
        .collection<Featured>('feature')
        .valueChanges({ idField: 'id' });
    } catch (error: any) {
      throw new Error('Error al obtener las ubicaciones', error);
    }
  }

  updateClient(featured: Featured): Promise<any> {
    return this._firebase
      .collection('feature')
      .doc(featured.id)
      .update(featured);
  }

  deleteFeatured(id: string): Promise<any> {
    return this._firebase.collection('feature').doc(id).delete();
  }
}
