import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() loading: boolean = false;
  @Input() showSort: boolean = false;
  @Input() noBorders: boolean = false;
}
