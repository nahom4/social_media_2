import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div>
        <div class="bg-[#FAFCFF] w-full p-4 my-4 border-2 border-[#EEEEEE] rounded-lg">A</div>
    <div class="flex gap-3 flex-wrap justify-center">
            <div *ngFor="let i of contacts" class="bg-[#FAFCFF] border-[#EEEEEE] rounded-lg flex flex-col gap-3 p-3 items-center w-[40%]" >
                <div class="p-1 rounded-full"><img class="rounded-full" src="profile_image.svg"></div>
                <div>
                    <h1>John Doe</h1>
                    <p class="!text-[#919191]">johnDoe</p>
                </div>
            </div>
    </div>
</div>
  `,
  styles: ``
})
export class ContactsComponent {
  @Input() message: string | undefined;
  @Input() profileImage: string | undefined;
  contacts = new Array(10)

}
