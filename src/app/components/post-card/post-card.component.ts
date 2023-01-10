import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Message } from 'src/data/Message';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post: Message = { body: '', author: {id: 0, username: '', password: '', messages: []}, created_date: new Date, updated_date: new Date }
  public ui: UiService

  constructor(ui: UiService){
    this.ui = ui
  }
}
