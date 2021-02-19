import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../notification.service";

@Component({
  selector: "app-send-btn",
  templateUrl: "./send-btn.component.html",
  styleUrls: ["./send-btn.component.css"]
})
export class SendBtnComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}

  send() {
    this.notificationService.sendNotification("New notification!");
  }
}
