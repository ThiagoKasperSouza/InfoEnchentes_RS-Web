import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JournalsComponent } from './pages/journals/journals.component';
import { RescuesComponent } from './pages/rescues/rescues.component';
import { SheltersComponent } from './pages/shelters/shelters.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'journals',
        component: JournalsComponent
    },
    {
        path:'rescues',
        component: RescuesComponent
    },
    {
        path:'shelters',
        component: SheltersComponent
    },
];
