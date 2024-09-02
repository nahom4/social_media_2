import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="flex items-center">
            <div class="p-2 text-white w-[50%] bg-gradient-to-r from-customGreenStart to-customGreenEnd  rounded-tl-xl rounded-bl-xl rounded-br-xl">
                <p>
                  {{message}}
                </p>
            </div>
            <div class="px-3">
                <img src={{profileImage}}>  
            </div>
        </div>
  `,
  styles: ``
})
export class MessageComponent {
  @Input() message: string | undefined;
  @Input() profileImage: string | undefined;

}
