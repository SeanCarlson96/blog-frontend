import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  public ui: UiService
  public filter: string = ''

  constructor(ui: UiService){
    this.ui = ui
  }
  
}
