import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Input()
  title: string;

  @Input()
  name: string;

  _takeHome(): void {
    window.location.reload();
  }

}
