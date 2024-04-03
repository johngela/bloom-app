import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = '';
  @Input() color = 'bg-orange-1';
  @Output() click: EventEmitter<any> = new EventEmitter();
  
  onClicked() {
    this.click.emit();
  }
}
