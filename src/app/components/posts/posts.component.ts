import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public ui: UiService
  public filter: string = ''

  constructor(ui: UiService){
    this.ui = ui
  }
}
