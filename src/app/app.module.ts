import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { TileComponent } from './components/Tile';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './components/Message';
import { ProfileComponent } from './profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatComponent } from './components/Stat';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { ContactsComponent } from './components/Contacts';
import { NotificationComponent } from './notification/notification.component';
import { ComponentsModule } from './components/components.module';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChatComponent,
    ProfileComponent,
    PhoneBookComponent,
    NotificationComponent,
    CommentComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FontAwesomeModule,
    ComponentsModule
    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  exports: [MatCardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
