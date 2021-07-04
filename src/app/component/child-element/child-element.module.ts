import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildElementComponent } from './child-element.component';



@NgModule({
  declarations: [ChildElementComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildElementComponent],
})
export class ChildElementModule { }
