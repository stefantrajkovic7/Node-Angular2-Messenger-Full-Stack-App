import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
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
export class AppComponent {
    message = {
      content: 'A message',
      author: 'Stefan'
    };
}
