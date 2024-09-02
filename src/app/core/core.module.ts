import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowComponent } from '../follow/follow.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from '../menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    FollowComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatCardModule

  ]

})
export class CoreModule { }
