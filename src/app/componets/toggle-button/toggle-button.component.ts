import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent {
  @Input() value: boolean = false;
  @Input() name: string = '';
  @Input() formGroup?: FormGroup;
  @Output() onChange = new EventEmitter<boolean>();

  onChangeValue(event: any) {
    this.value = event.target.checked;
    this.onChange.emit(event.target.checked);
  }
}
