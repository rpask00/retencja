import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list.component';
import {RouterModule, Routes} from '@angular/router';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./users.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    HttpClientModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersListModule {
}
