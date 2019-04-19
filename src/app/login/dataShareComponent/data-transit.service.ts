import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class DataTransitService {
  private fakeUser = new User('', '', '', '', '');

  private messageSource = new BehaviorSubject(this.fakeUser);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  sendFbData(message: User) {
    this.messageSource.next(message);
  }
}
