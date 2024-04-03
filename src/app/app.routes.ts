import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UpcomingComponent } from './views/upcoming/upcoming.component';
import { PreviousComponent } from './views/previous/previous.component';
import { RecordingsComponent } from './views/recordings/recordings.component';
import { PersonalRoomComponent } from './views/personal-room/personal-room.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'upcoming',
        component: UpcomingComponent
    },
    {
        path: 'previous',
        component: PreviousComponent
    },
    {
        path: 'recordings',
        component: RecordingsComponent
    },
    {
        path: 'personal-room',
        component: PersonalRoomComponent
    }
];
