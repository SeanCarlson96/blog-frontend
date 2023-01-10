import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-appuser-page',
  templateUrl: './appuser-page.component.html',
  styleUrls: ['./appuser-page.component.css']
})
export class AppuserPageComponent {
  public ui: UiService

  constructor(ui: UiService){
    this.ui = ui
  }
}
