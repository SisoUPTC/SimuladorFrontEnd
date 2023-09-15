import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color: string = 'gray-dark';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  get styleType(): string {
    return `border-none bg-${this.color}`;
  }
}
