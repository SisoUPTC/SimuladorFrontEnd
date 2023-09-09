import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input () color: string ="black"
  @Input () icon: string =""
  @Input () text: string =""
  @Output () onClick: EventEmitter<void> = new EventEmitter()
}
