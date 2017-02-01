import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { MessageComponent } from "./messages/message.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { routing } from './app.routing';
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";


@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        ErrorComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
