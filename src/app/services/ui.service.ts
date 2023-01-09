import { Injectable } from '@angular/core';
import { AppUser } from 'src/data/AppUser';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public currentPage: string | null
  public loggedIn: boolean = false
  public currentUser = {} as AppUser | null
  private newUser = {} as AppUser
  public appUsers: AppUser[] = [];
  appUsersSubject: Subject<AppUser[]> = new Subject();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.currentPage = localStorage.getItem("page") ? localStorage.getItem("page") : 'posts';
    this.loadUsers();
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
  getAppUser(liEmail: string, liPassword: string): void {
    this.http
      .get<AppUser>(`http://localhost:8080/appusers?email=${liEmail}&password=${liPassword}`)
      .pipe(take(1))
      .subscribe({
        next: appUser => {
        this.currentUser = appUser
        this.loggedIn = true
        console.log(this.currentUser)
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
}
