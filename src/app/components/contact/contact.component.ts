import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { CONTACT_DATA, ContactItem } from './contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contactItems: ContactItem[] = CONTACT_DATA;
}
