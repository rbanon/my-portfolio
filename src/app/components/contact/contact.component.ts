import { Component } from '@angular/core';
import { CONTACT_DATA, ContactItem } from './contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contactItems: ContactItem[] = CONTACT_DATA;

  trackByLabel(_: number, item: ContactItem): string {
    return item.label;
  }
}