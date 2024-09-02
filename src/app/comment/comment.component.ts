import { Component } from '@angular/core';
import { faShare,faMessage,faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comments = [1,2,3,4,5,6,7,8,9]
  share = faShare;
  comment = faMessage;
  heart = faHeart;
}
