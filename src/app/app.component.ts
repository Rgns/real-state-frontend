import {Component} from '@angular/core';
import {NotificationService} from './shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'ImmoScout24';
  title = 'Real State Listing';
  author = 'Ritu Gupta';
  version = '1.0.0';

  constructor(public notificationService: NotificationService) {
  }
}
