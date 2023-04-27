import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { clientFirebaseService } from '../../services/clientFirebase.service';
import { ModalClientFormComponent } from '../modal-client-form/modal-client-form.component';
import { client } from 'src/app/interfaces/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  client?: client | null = null;

  constructor(
    private _clientSerevice: clientFirebaseService,
    private dialogRef: MatDialogRef<ModalClientFormComponent>
  ) {}
  ngOnInit(): void {
    this.client = this._clientSerevice.clientSelected;
    if (this.client != null) {
      this.initForm = {
        name: this.client.name,
        celphone: this.client.celphone!,
        dni: this.client.dni!,
        email: this.client.email!,
        ubicacion: this.client.ubicacion!,
      };
    }
  }

  initForm = {
    name: '',
    celphone: '',
    dni: '',
    email: '',
    ubicacion: '',
  };

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['name']?.invalid &&
      this.miFormulario?.controls['name']?.touched
    );
  }

  async insertRentDate() {
    const { name, celphone, dni, email, ubicacion } =
      this.miFormulario.control.value;

    if (this.client != null) {
      const { id } = this.client;
      await this._clientSerevice.updateClient({
        name,
        celphone,
        dni,
        email,
        ubicacion,
        id,
      });
      this.miFormulario.resetForm();
      Swal.fire('Correcto', 'Editado correctamente', 'success');
    } else {
      await this._clientSerevice.insertarCliente({
        name,
        celphone,
        dni,
        email,
        ubicacion,
      });
      this.miFormulario.resetForm();
      Swal.fire('Correcto', 'Insertado correctamente', 'success');
    }

    this.dialogRef.close();
  }
}
