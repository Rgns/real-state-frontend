import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ModalComponent} from './modal/modal.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HeaderComponent, ModalComponent]
})
export class ComponentsModule {
}
