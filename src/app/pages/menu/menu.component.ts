import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  static isLoading = false

  get loading() {
    return MenuComponent.isLoading
  }
}
