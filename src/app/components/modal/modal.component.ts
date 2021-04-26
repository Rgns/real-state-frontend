import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {

  @Input()
  open: boolean;

  @Input()
  title: string;

  @Input()
  primaryBtnLabel: string;

  @Input()
  set primaryBtnDisabled(disabled: boolean) {
    this._primaryBtnDisabled = disabled;
  }

  _primaryBtnDisabled: boolean;

  @Input()
  secondaryBtnLabel: string = 'Cancel';

  @Output()
  openChange = new EventEmitter<boolean>();

  @Output()
  primaryBtn = new EventEmitter<any>();

  @Output()
  secondaryBtn = new EventEmitter<any>();

  _primaryBtnClick(): void {
    this.primaryBtn.emit();
  }

  _cancel(): void {
    this.open = false;
    this.openChange.emit(this.open);
  }

  _secondaryBtnClick(): void {
    this._cancel();
    this.secondaryBtn.emit();
  }

}
