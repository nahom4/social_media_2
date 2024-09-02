import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="flex justify-between items-center">
            <div class="h-full flex flex-col justify-between">
                <h1 class="!text-[15] text-[#1D1D20] font-medium">{{title}}</h1>
                <p class="text-[#919191] !text-[12]">{{subTitle}}</p>
            </div>
            <div class="flex w-[30%] justify-around items-center">
                <div *ngIf = "!show" class="w-12 h-12"></div>
                <div *ngIf = "show" class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-customGreenStart to-customGreenEnd">{{value}}</div>
                <div>
                    <a><img class="w-full h-full" src="BG.svg"></a>
                </div>       
            </div>
         </div>
  `,
  styles: ``
})
export class TileComponent {
  @Input() title: string | undefined;
  @Input() subTitle: string | undefined;
  @Input() show: boolean | undefined;
  @Input() value: string | undefined;

}
