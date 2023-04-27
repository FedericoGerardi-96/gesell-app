import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFeaturedFormComponent } from '../components/modal-featured-form/modal-featured-form.component';

@Injectable({
  providedIn: 'root'
})
export class MyDialogFeaturedService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    return this.dialog.open(ModalFeaturedFormComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
