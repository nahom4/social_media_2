import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    LandingPageComponent, 
       
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
