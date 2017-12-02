import { NotificationService } from '../providers/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  display: boolean = false;
  message: string;
  constructor(private notifier: NotificationService) {
    notifier.emitter.subscribe(
      data => {
        this.display = data.display;
        this.message = data.message;
      }
    );
  }

  removeMessage() {
    this.display = false;
    this.message = '';
  }
  
  ngOnInit() {
  }

}

