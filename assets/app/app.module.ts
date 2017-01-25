import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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


@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
