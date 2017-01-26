import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component ({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})

export class MessageComponent {
  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>();

  constructor(private messageService: MessageService) {

  }

  onEdit() {
    this.editClicked.emit('A new value');
  }

  onDelete() {
    this.messageService.deleteMessage(this.message);
  }
}
