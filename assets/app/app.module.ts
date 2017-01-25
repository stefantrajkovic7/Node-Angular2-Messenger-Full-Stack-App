import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { MessageComponent } from "./messages/message.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { routing } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}
