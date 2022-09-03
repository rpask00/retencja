import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersListComponent} from "../users-list/users-list.component";
import {UsersFormComponent} from "./users-form.component";

const routes: Routes = [{
  path: "",
  component: UsersFormComponent,
  pathMatch: "full"
}
]

@NgModule({
  declarations: [UsersFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class UsersFormModule {
}
