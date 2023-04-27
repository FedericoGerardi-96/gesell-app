import { Component, Input, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FeaturesFirebaseService } from '../../services/features-firebase.service';
import { NgForm } from '@angular/forms';
import { Featured } from 'src/app/interfaces/Featured';
import { MyDialogFeaturedService } from '../../services/my-dialog-featured.service';

@Component({
  selector: 'app-featured-form',
  templateUrl: './featured-form.component.html',
  styleUrls: ['./featured-form.component.css'],
})
export class FeaturedFormComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  feature?: Featured | null = null;
  featuredId?: string;
  @Input() esUpdate = false;

  constructor(
    private _featuresFirebaseService: FeaturesFirebaseService,
    private _myDialogFeaturedService: MyDialogFeaturedService
  ) {}

  ngOnInit(): void {
    const featuredSelected = this._featuresFirebaseService.featuredSelected;
    if (this.esUpdate && featuredSelected != null) {
      this.featuredId = featuredSelected.id;
      this.initForm = {
        name: featuredSelected?.name || '',
        location: featuredSelected?.location || '',
        description: featuredSelected?.description || '',
        link: featuredSelected.link || '',
        lat: featuredSelected?.coordinates![0].toString() || '',
        long: featuredSelected.coordinates![1].toString() || '',
      };
    }
  }

  initForm = {
    name: '',
    location: '',
    description: '',
    link: '',
    lat: '',
    long: '',
  };

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['name']?.invalid &&
      this.miFormulario?.controls['name']?.touched
    );
  }

  async insertRentDate() {
    const { name, location, description, link, lat, long } =
      this.miFormulario.control.value;

    const coordinates = [Number(lat), Number(long)] as [number, number];

    if (this.esUpdate) {
      await this._featuresFirebaseService.updateClient({
        name,
        location,
        description,
        link,
        coordinates,
        id: this.featuredId,
      });
      this.miFormulario.resetForm();
      Swal.fire('Correcto', 'Editado correctamente', 'success');
      this._myDialogFeaturedService.closeDialog();
    } else {
      await this._featuresFirebaseService.insertFeature({
        name,
        location,
        description,
        link,
        coordinates,
      });
      this.miFormulario.resetForm();
      Swal.fire('Correcto', 'Insertado correctamente', 'success');
    }
  }
}
