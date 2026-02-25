import { RouterModule, Routes } from '@angular/router';
import { Exercise01 } from './components/exercise01/exercise01';
import { App } from './app';

export const routes: Routes = [
    { path: 'color', component: Exercise01 },
    { path: '', redirectTo: 'color', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

