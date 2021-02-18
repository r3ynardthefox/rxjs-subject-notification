import { Component, OnInit } from "@angular/core";
import { interval, Observable, of } from "rxjs";
import { buffer, throttle } from "rxjs/operators";
import { NotificationService } from "../notification.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  notification$: Observable<any>;

  constructor(private notificationService: NotificationService) {
    this.notification$ = this.notificationService.notificationStream$;
  }

  cancel() {
    this.notificationService.cancelNotification();
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
