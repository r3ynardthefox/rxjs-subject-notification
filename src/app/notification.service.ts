import { Injectable } from "@angular/core";
import { Observable, of, Subject, timer } from "rxjs";
import { debounce, filter, map, tap } from "rxjs/operators";
import { Notification } from "./notification";

@Injectable({ providedIn: "root" })
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notificationStream$ = this.notificationSubject.asObservable();

  constructor() {}

  sendNotification(msg: string) {
    this.notificationSubject.next(Notification.createNotification(msg));
  }
}
