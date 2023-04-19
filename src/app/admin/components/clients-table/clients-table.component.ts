import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { client } from 'src/app/interfaces/client';
import { clientFirebaseService } from '../../services/clientFirebase.service';
import { MyDialogClientService } from '../../services/my-dialog-client.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTableComponent implements AfterViewInit {
  dataSource?: MatTableDataSource<client>;
  data: client[] = [];
  resultsLength: number = 0;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  displayedColumns: string[] = [
    'Nombre',
    'Telefono',
    'Email',
    'Dni',
    'Ubicacion',
    'delete',
    'edit',
  ];

  constructor(
    private _clienteFirebaseService: clientFirebaseService,
    private _myDialogClientService: MyDialogClientService
  ) {
    this._clienteFirebaseService.getClients().subscribe((clients: client[]) => {
      this.dataSource = new MatTableDataSource(clients);
      this.data = clients;
      this.resultsLength = clients.length;
      this.dataSource!.paginator = this.paginator!;
      this.dataSource!.sort = this.sort!;
    });
  }

  ngAfterViewInit() {}

  eliminarCliente(clientToDelete: client, deleteCliente: boolean) {
    if (!deleteCliente) {
      Swal.fire('Cancelado', 'No se elimino...', 'warning');
      return;
    }
    Swal.fire('Correecto', 'Eliminado correctamente', 'success');
    this._clienteFirebaseService.deleteClient(clientToDelete.id!);
  }

  editarCliente(clientToUpdate: client) {
    this._clienteFirebaseService.clientSelected = clientToUpdate;
    this._myDialogClientService.openDialog();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }
}
