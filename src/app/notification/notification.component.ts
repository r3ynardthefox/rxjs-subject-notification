import { Component, OnInit } from "@angular/core";
import { combineLatest, interval, merge, Observable, of, Subject } from "rxjs";
import { bufferCount, delay, map, scan, startWith } from "rxjs/operators";
import { NotificationService } from "../notification.service";
import { Notification } from "../notification";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  notifications$: Observable<Notification> = this.notificationService
    .notificationStream$;

  private cancelSubject = new Subject<Notification>();
  cancelNotification$: Observable<
    Notification
  > = this.cancelSubject.asObservable().pipe(startWith(undefined));

  timeoutNotification$ = this.notifications$.pipe(delay(5000));

  notificationsToRemove$ = merge(
    this.cancelNotification$,
    this.timeoutNotification$
  );

  notificationsToDisplay$ = combineLatest([
    this.notifications$,
    this.notificationsToRemove$
  ]).pipe(
    startWith([undefined, undefined]),
    bufferCount(2, -1),
    map(([prev, current]) => [
      current[0] === prev[0] ? undefined : current[0],
      current[1] === prev[1] ? undefined : current[1]
    ]),
    scan((acc, [notification, toTakeOut]) => {
      const notifArray = !!notification ? [...acc, notification] : acc;
      return notifArray.filter(notif => notif?.getId() !== toTakeOut?.getId());
    }, [])
  );

  cancel(notification: Notification) {
    this.cancelSubject.next(notification);
  }

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
