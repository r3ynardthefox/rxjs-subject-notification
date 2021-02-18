import { Injectable } from "@angular/core";
import { Observable, of, Subject, timer } from "rxjs";
import { debounce, filter, map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class NotificationService {
  private notificationSubject = new Subject();
  notificationStream$ = this.notificationSubject.asObservable();

  constructor() {
    this.notificationStream$
      .pipe(
        filter(msg => msg !== ""),
        tap(msg => console.log(msg)),
        debounce(() => timer(3000)),
        tap(() => {
          this.notificationSubject.next("");
        })
      )
      .subscribe();
  }

  sendNotification(msg: string) {
    this.notificationSubject.next(msg);
  }

  cancelNotification() {
    this.notificationSubject.next("");
  }
}
