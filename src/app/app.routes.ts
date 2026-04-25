import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/home/home').then(m => m.Home)
            },
            {
                path: 'projects',
                loadComponent: () =>
                    import('./features/projects/projects').then(m => m.Projects)
            },
            {
                path: 'demos',
                loadComponent: () =>
                    import('./features/demos/demos').then(m => m.Demos)
            },
            {
                path: 'architecture',
                loadComponent: () =>
                    import('./features/architecture/architecture').then(m => m.Architecture)
            },
            {
                path: 'contact',
                loadComponent: () =>
                    import('./features/contact/contact').then(m => m.Contact)
            },
            {
                path: 'demos/dynamic-form',
                loadComponent: () =>
                    import('./features/demos/dynamic-form/dynamic-form')
                        .then(m => m.DynamicForm)
            }
        ]
    }
];