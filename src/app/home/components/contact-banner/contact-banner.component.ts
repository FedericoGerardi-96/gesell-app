import { Component } from '@angular/core';
import { ContactModalService } from 'src/app/services/contact-modal.service';

@Component({
  selector: 'app-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.css'],
})
export class ContactBannerComponent {
  constructor(private _contactModalService: ContactModalService) {}

  openContactDialog() {
    this._contactModalService.openDialog();
  }
}
