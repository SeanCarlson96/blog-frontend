import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppuserPageComponent } from './components/appuser-page/appuser-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    AppuserPageComponent,
    SignupComponent,
    LoginComponent,
    UsersListComponent,
    UserCardComponent,
    PostCardComponent,
    PostPageComponent,
    CommentCardComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
