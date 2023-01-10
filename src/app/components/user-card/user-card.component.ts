import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { AppUser } from 'src/data/AppUser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: AppUser = {id: 0, username: '', password: '', messages: []}
  public ui: UiService

  constructor(ui: UiService){
    this.ui = ui
  }
}
