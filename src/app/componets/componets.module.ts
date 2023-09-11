import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { ButtonComponent } from './button/button.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    LateralMenuComponent,
    ButtonComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LateralMenuComponent,
    ButtonComponent,
    WelcomeComponent
  ]
})
export class ComponetsModule { }
