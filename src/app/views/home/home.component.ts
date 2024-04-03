import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  time: any;
  date: any;
  
  constructor() {
    const now = new Date();
    this.time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    this.date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  }

  onCardClicked(value: string) {
    alert(value);
  }
}
