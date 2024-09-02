import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './auth/landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FollowComponent } from './follow/follow.component';
import { MenuComponent } from './menu/menu.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { NotificationComponent } from './notification/notification.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {title : "Landing Page",
  component : LandingPageComponent,
  path : 'auth/landing-page'
  },
  {title : "Login Page",
  component : LoginComponent,
  path : 'auth/login'
  },
  {title : "Sign-up Page",
  component : SignUpComponent,
  path : 'auth/sign-up'
  },
  {title : "follow Page",
  component : FollowComponent,
  path : 'core/follow'
  },
  {title : "Menu Page",
    component : MenuComponent,
    path : 'core/menu'
  },
  {title : "Chat Page",
    component : ChatComponent,
    path : 'core/chat'
  },
  {title : "Profile Page",
    component : ProfileComponent,
    path : 'core/profile'
  },
  {title : "Phone book Page",
    component : PhoneBookComponent,
    path : 'core/phone_book'
  },
  {title : "Notification",
    component : NotificationComponent,
    path : 'core/notification'
  },
  {title : "Comments",
    component : CommentComponent,
    path : 'core/comments'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
