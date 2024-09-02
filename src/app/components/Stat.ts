import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import the MatCardModule

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule, MatCardModule], // Add MatCardModule to the imports array
  template: `
   <div class="flex justify-around gap-10 text-center">
                <div>
                    <mat-card class="!p-2">
                        <mat-card-header>
                            <mat-card-title style="font-size: 25px;" >500</mat-card-title>
                            <mat-card-subtitle style="font-size: 12px;" class="!text-[#919191]">Start</mat-card-subtitle>
                        </mat-card-header>
                    </mat-card>
                </div>
            
                <div>
                    <mat-card class="!p-2">
                        <mat-card-header>
                            <mat-card-title style="font-size: 25px;" >500</mat-card-title>
                            <mat-card-subtitle style="font-size: 12px;" class="!text-[#919191]">Start</mat-card-subtitle>
                        </mat-card-header>
                    </mat-card>
                </div>
                <div>
                    <mat-card class="!p-2">
                        <mat-card-header>
                            <mat-card-title style="font-size: 25px;" >500</mat-card-title>
                            <mat-card-subtitle style="font-size: 12px;" class="!text-[#919191]">Start</mat-card-subtitle>
                        </mat-card-header>
                    </mat-card>
                </div>
            </div>
  `,
  styles: ``
})
export class StatComponent {
  @Input() message: string | undefined;
  @Input() profileImage: string | undefined;

}
