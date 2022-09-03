import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: "",
  component: UsersListComponent,
  pathMatch: "full"
}];

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class UsersListModule {
}
