import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGoogle,faTwitter} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  faGoogle = faGoogle
  faTwitter = faTwitter
  faArrowLeft = faArrowLeft
}
