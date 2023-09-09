import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    LateralMenuComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LateralMenuComponent,
    ButtonComponent
  ]
})
export class ComponetsModule { }
