import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => [
      {
        path: '',
        component: HomeComponent,
        title: 'e-book',
      },
      {
        path: 'book',
        component: BookComponent,
      },
    ],
  },
];
