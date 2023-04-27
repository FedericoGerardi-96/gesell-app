import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Featured } from 'src/app/interfaces/Featured';
import { FeaturesFirebaseService } from '../../services/features-firebase.service';
import Swal from 'sweetalert2';
import { MyDialogFeaturedService } from '../../services/my-dialog-featured.service';

@Component({
  selector: 'app-featured-table',
  templateUrl: './featured-table.component.html',
  styleUrls: ['./featured-table.component.css'],
})
export class FeaturedTableComponent {
  dataSource?: MatTableDataSource<Featured>;
  data: Featured[] = [];
  resultsLength: number = 0;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  displayedColumns: string[] = ['name', 'location', 'edit', 'delete'];

  constructor(
    private _featuresFirebaseService: FeaturesFirebaseService,
    private _myDialogFeaturedService: MyDialogFeaturedService
  ) {
    this._featuresFirebaseService
      .getFeatures()
      .subscribe((feature: Featured[]) => {
        this.dataSource = new MatTableDataSource(feature);
        this.data = feature;
        this.resultsLength = feature.length;
        this.dataSource!.paginator = this.paginator!;
        this.dataSource!.sort = this.sort!;
      });
  }

  ngAfterViewInit() {}

  eliminarCliente(featuredToDelete: Featured, deleteFeatured: boolean) {
    if (!deleteFeatured) {
      Swal.fire('Cancelado', 'No se elimino...', 'warning');
      return;
    }
    Swal.fire('Correecto', 'Eliminado correctamente', 'success');
    this._featuresFirebaseService.deleteFeatured(featuredToDelete.id!);
  }

  editarCliente(featuredToUpdate: Featured) {
    this._featuresFirebaseService.featuredSelected = featuredToUpdate;
    this._myDialogFeaturedService.openDialog();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }
}
