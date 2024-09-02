import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  faSearch = faSearch;
  count = 35;
  notifications  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
