import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowPipePipe} from './show-pipe.pipe';


@NgModule({
  declarations: [ShowPipePipe],
  imports: [
    CommonModule
  ],
  exports: [ShowPipePipe]
})
export class SharedModule {
}
