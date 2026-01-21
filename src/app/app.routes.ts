import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./pages/folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.page').then(m => m.QuizPage)
  },
  {
    path: 'starwars-people',
    loadComponent: () => import('./pages/starwars-people/starwars-people.page').then(m => m.StarwarsPeoplePage)
  },
  {
    path: 'braile-page',
    loadComponent: () => import('./pages/braile-page/braile-page.page').then(m => m.BrailePagePage)
  },
];
