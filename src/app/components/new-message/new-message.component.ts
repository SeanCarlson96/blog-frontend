import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { MessageDTO } from 'src/DTOs/MessageDTO';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {
  public ui: UiService
  public newMessageTitle: string = ''
  public newMessageBody: string = ''
  public newMessage = {} as MessageDTO
  public newCommentPostId: number = 0
  public newMessageRecipientId: number = 0

  constructor(ui: UiService){
    this.ui = ui
  }

  createMessage(): void {
    //create a messageDTO from the information
    if(this.ui.messageType==='post'){
      this.newMessage = {
        title: this.newMessageTitle,
        body: this.newMessageBody,
        authorId: this.ui.currentUser?.id,
        created_date: new Date,
        updated_date: new Date,
        views: 0,
        commentIds: []
      }
    } else if(this.ui.messageType==='comment'){
      this.newMessage = {
        body: this.newMessageBody,
        authorId: this.ui.currentUser?.id,
        created_date: new Date,
        updated_date: new Date,
        postId: this.newCommentPostId
      }
    } else if(this.ui.messageType==='message'){
      this.newMessage = {
        body: this.newMessageBody,
        authorId: this.ui.currentUser?.id,
        created_date: new Date,
        updated_date: new Date,
        recipientId: this.newMessageRecipientId
      }
    }
    this.ui.addMessage(this.newMessage)
  }
}
