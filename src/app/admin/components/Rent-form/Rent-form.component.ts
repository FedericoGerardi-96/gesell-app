import { Component, Injector, Input, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

import moment from 'moment';
import { client } from 'src/app/interfaces/client';
import { clientFirebaseService } from '../../services/clientFirebase.service';
import { RentFirebaseService } from '../../services/rent-firebase.service';
import { rentDates } from 'src/app/interfaces/rentDates';
import { ModalRentFormComponent } from '../modal-rent-form/modal-rent-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyDialogRentService } from '../../services/my-dialog-rent.service';

const today = new Date();
const day = today.getDay();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-Rent-form',
  templateUrl: './Rent-form.component.html',
  styleUrls: ['./Rent-form.component.css'],
})
export class FormComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  @Input() esUpdate = false;
  clients: client[] = [];
  rentId?: string;
  clientSelectedObject?: client;

  constructor(
    private _clienteFirebaseService: clientFirebaseService,
    private _rentFirebaseService: RentFirebaseService,
    private myDialogRentService: MyDialogRentService
  ) {}

  ngOnInit(): void {
    this._clienteFirebaseService.getClients().subscribe((clients: client[]) => {
      this.clients = clients;
    });
    const rent = this._rentFirebaseService.rentSelected;
    if (this.esUpdate && rent != null) {
      this.rentId = rent.id;
      const clientResp = this._clienteFirebaseService
        .getClientxId(rent.clientId)
        .subscribe((clientR: client) => {
          this.clientSelectedObject = clientR;
          clientResp.unsubscribe();
        });
      this.initForm = {
        client: rent.name,
        startDate: this.convertStringToDate(rent.startDate!.toString()),
        endDate: this.convertStringToDate(rent.endDate!.toString()),
        descripcion: rent.descripcion || '',
        totalCobrado: rent.totalCobrado,
        senia: rent.seña || 0,
        pagoTotal: rent.pagoTotal || false,
        clientSelect: rent.clientId,
      };
    }
  }

  convertStringToDate(dateString: string): Date {
    const momentDate = moment(dateString, 'DD/MM/YYYY');
    const date = momentDate.toDate();
    return date;
  }

  initForm = {
    client: '',
    startDate: moment().toDate(),
    endDate: moment().toDate(),
    descripcion: '',
    totalCobrado: 0,
    senia: 0,
    pagoTotal: false,
    clientSelect: '',
  };

  totalValido(): boolean {
    if (this.miFormulario?.control.value?.totalCobrado > 0) return true;
    return false;
  }

  clientValido(): boolean {
    if (this.miFormulario?.control.value?.client != '') return true;
    return false;
  }

  getClientSelected() {
    const clientId = this.miFormulario.control.value.client;
    const clientResp = this._clienteFirebaseService
      .getClientxId(clientId)
      .subscribe((clientR: client) => {
        this.clientSelectedObject = clientR;
        clientResp.unsubscribe();
      });
  }

  async insertRentDate(): Promise<void> {
    let { startDate, endDate, descripcion, totalCobrado, seña } =
      this.miFormulario.control.value!;
    if (!this.clientSelectedObject) return;
    const { id, name } = this.clientSelectedObject!;

    const finalizado = false;
    startDate = moment(this.miFormulario.control.value?.startDate).format(
      'DD/MM/YYYY'
    );
    endDate = moment(this.miFormulario.control.value?.endDate).format(
      'DD/MM/YYYY'
    );

    if (!this.esUpdate) {
      await this._rentFirebaseService.insertarAlquiler({
        clientId: id!,
        startDate,
        endDate,
        descripcion,
        totalCobrado,
        seña,
        finalizado,
        name,
      });
      this.miFormulario.resetForm();
    } else {
      await this._rentFirebaseService.updateRent({
        clientId: id!,
        startDate,
        endDate,
        descripcion,
        totalCobrado,
        seña,
        finalizado,
        name,
        id: this.rentId!,
      });
      this.myDialogRentService.closeDialog();
    }
  }
}
