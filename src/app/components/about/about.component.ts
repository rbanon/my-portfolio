import { Component } from '@angular/core';
import { ABOUT_DATA, AboutSectionData } from './about.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly about: AboutSectionData = ABOUT_DATA;
}