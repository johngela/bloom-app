import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarLinks = [
    {
      imgURL: 'assets/icons/Home.svg',
      route: '/',
      label: 'Home',
    },
  
    {
      imgURL: 'assets/icons/upcoming.svg',
      route: '/upcoming',
      label: 'Upcoming',
    },
    {
      imgURL: 'assets/icons/previous.svg',
      route: '/previous',
      label: 'Previous',
    },
    {
      imgURL: 'assets/icons/Video.svg',
      route: '/recordings',
      label: 'Recordings',
    },
    {
      imgURL: 'assets/icons/add-personal.svg',
      route: '/personal-room',
      label: 'Personal Room',
    },
  ]
}
