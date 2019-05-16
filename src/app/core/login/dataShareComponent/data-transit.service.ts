import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class DataTransitService {
    private fakeUser = new User('', '', '', '', '');
    private fakeId = '';

    private messageSource = new BehaviorSubject(this.fakeUser);
    private idSource = new BehaviorSubject(this.fakeId);
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    sendFbData(message: User) {
        this.messageSource.next(message);
    }

    reloadSpying(message: string) {
        this.idSource.next(message);
    }
}
