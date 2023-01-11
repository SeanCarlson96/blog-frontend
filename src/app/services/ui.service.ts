import { Injectable } from '@angular/core';
import { AppUser } from 'src/data/AppUser';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, take } from 'rxjs';
import { Message } from 'src/data/Message';
import { MessageDTO } from 'src/DTOs/MessageDTO';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public currentPage: string | null
  public loggedIn: boolean = false
  public currentUser = {} as AppUser | null
  private newUser = {} as AppUser
  public appUsers: AppUser[] = [];
  public messages: Message[] = [];
  public appUsersSubject: Subject<AppUser[]> = new Subject();
  public messagesSubject: Subject<Message[]> = new Subject();
  public userForUserPage = {} as AppUser
  public postForPostPage = {} as Message
  public messageType: string = ''

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.currentPage = localStorage.getItem("page") ? localStorage.getItem("page") : 'posts';
    this.currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser") || '{}') : {} as AppUser;
    this.loggedIn = localStorage.getItem("loggedIn") === 'true' ? true : false;
    this.userForUserPage = localStorage.getItem("userForUserPage") ? JSON.parse(localStorage.getItem("userForUserPage") || '{}') : {} as AppUser;
    this.postForPostPage = localStorage.getItem("postForPostPage") ? JSON.parse(localStorage.getItem("postForPostPage") || '{}') : {} as Message;
    this.loadUsers();
    this.loadMessages();
  }
  setPage(target: string): string{
    localStorage.setItem("page", target);
    return this.currentPage = target
  }
  setCurrentUser(user: AppUser): AppUser{
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("loggedIn", 'true');
    return this.currentUser = user
  }
  setUserForUserPage(user: AppUser): AppUser{
    localStorage.setItem("userForUserPage", JSON.stringify(user));
    return this.userForUserPage = user
  }
  setPostForPostPage(post: Message): Message{
    localStorage.setItem("postForPostPage", JSON.stringify(post));
    return this.postForPostPage = post
  }
  logout(){
    this.currentUser=null; this.loggedIn=false; localStorage.setItem("loggedIn", 'false');
  }
  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action);
  }
  public loadUsers(): void{
    this.http
      .get<AppUser[]>('http://localhost:8080/appusers')
      .pipe(take(1))
      .subscribe({
          next: users =>{
            this.appUsers = users;
            this.appUsersSubject.next(users);
          },
          error: () => this.openSnackBar('Error loading all users', 'Close'),
    })
  }
  getAppUser(liUsername: string, liPassword: string): void {
    this.http
      .get<AppUser>(`http://localhost:8080/appusers?username=${liUsername}&password=${liPassword}`)
      .pipe(take(1))
      .subscribe({
        next: appUser => {
        this.currentUser = appUser
        this.setCurrentUser(appUser)
        this.loggedIn = true
      },
      error: () => this.openSnackBar('Invalid Credentials', 'Close'),
    })
  }
  addAppUser(suUsername: string, suPassword: string): void {
    this.newUser = {
      id: 0,
      username: suUsername,
      password: suPassword,
      messages: []
    }
    this.http
      .post<AppUser>('http://localhost:8080/appusers', this.newUser)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.openSnackBar('Registered Successfully', 'Close')
          this.loadUsers();
        },
        error: () => this.openSnackBar('This Username is already registered, please sign in', 'Close'),
    })
  }
  whenAppUsersUpdates(): Observable<AppUser[]>{
    return this.appUsersSubject.asObservable();
  }
  public loadMessages(): void{
    this.http
      .get<Message[]>('http://localhost:8080/messages')
      .pipe(take(1))
      .subscribe({
          next: messages =>{
            this.messages = messages;
            this.messagesSubject.next(messages);
          },
          error: () => this.openSnackBar('Error loading all messages', 'Close'),
    })
  }
  addMessage(newMessage: MessageDTO): void {
    this.http
      .post<AppUser>('http://localhost:8080/messages', newMessage)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.openSnackBar('New Message Posted', 'Close')
          this.loadMessages();
        },
        error: () => this.openSnackBar('Message failed to post', 'Close'),
    })
  }
  whenMessagesUpdates(): Observable<Message[]>{
    return this.messagesSubject.asObservable();
  }
}