import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // public notification:Notification;
  public showMessage: boolean;
  public message: string;

  constructor() {
  }

  public displayNotification(msg: string): void {
    this.showMessage = true;
    this.message = msg;
    setTimeout(() => {
      this.showMessage = false;
      this.message = '';
    }, 3000);
  }

}
