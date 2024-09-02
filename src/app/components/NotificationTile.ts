import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="flex justify-between items-center w-full">
      <div class="flex items-center gap-3 px-3 py-5 border-[#EEEEEE] border-2 my-3 rounded-md">
                    <div><img class="rounded-full" src="profile_image.svg"></div>
                    <div>
                        <h1 class="text-[16] text-[#1A1B23] font-medium">
                            {{name}}
                        </h1>
                        <p class="text-[#919191] text-[12]">
                            {{time}}
                        </p>
                    </div>
                    <p class="text-[#676767]">{{message}}</p>
         </div>
  `,
  styles: ``
})
export class NotificationTileComponent {
  @Input() message: string | undefined;
  @Input() name: string | undefined;
  @Input() time: string | undefined;

}
