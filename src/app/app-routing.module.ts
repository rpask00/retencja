import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users-list',
    loadChildren: () => import('./users-list/users-list.module').then(m => m.UsersListModule)
  },
  {
    path: 'users-form',
    loadChildren: () => import('./users-form/users-form.module').then(m => m.UsersFormModule)
  },
  {
    path: "",
    redirectTo: "users-list",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
