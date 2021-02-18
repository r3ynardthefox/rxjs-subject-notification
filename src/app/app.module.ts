import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NotificationService } from "./notification.service";
import { NotificationComponent } from "./notification/notification.component";
import { SendBtnComponent } from "./send-btn/send-btn.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NotificationComponent, SendBtnComponent],
  bootstrap: [AppComponent],
  providers: [NotificationService]
})
export class AppModule {}
