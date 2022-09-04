import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users-list',
    loadChildren: () => import('./users-list/users-list.module').then(m => m.UsersListModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)
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
