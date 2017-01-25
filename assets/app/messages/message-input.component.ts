import { Component, OnInit } from "@angular/core"

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSave(value: string) {
    const message = new Message(value, 'Stefan');
    this.messageService.addMessage(message);
  }

}
