import { Injectable } from '@angular/core';

import { Message } from './message.model';

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  addMessage(message: Message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  getMessages() {
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
