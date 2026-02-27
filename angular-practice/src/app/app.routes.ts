import { Routes } from '@angular/router';
import { Diy5 } from './diy-practice/diy5/diy5';
import { Diy6 } from './diy-practice/diy6/diy6';
import { Diy7 } from './diy-practice/diy7/diy7';
import { Register } from './diy-practice/diy6/register/register';
import { Secret } from './diy-practice/diy6/secret/secret';

export const routes: Routes = [
    { path: 'diy5', component: Diy5 },
    {
        path: 'diy6',
        component: Diy6,
        children: [
            { path: 'register', component: Register },
            { path: 'secret', component: Secret }
        ]
    },
    { path: 'diy7', component: Diy7 }

];
