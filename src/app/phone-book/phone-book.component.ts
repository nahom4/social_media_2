import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrl: './phone-book.component.css'
})
export class PhoneBookComponent {
  faSearch = faSearch;
}
