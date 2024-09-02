import { Component } from '@angular/core';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  faHeart = faHeart;
  faSearch = faSearch;
  array = new Array(10)
}
