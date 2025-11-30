import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'c-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [
    RouterLink
  ]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
