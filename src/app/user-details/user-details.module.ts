import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserDetailsComponent} from "./user-details.component";
import {UsersService} from "../services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: ":userId",
    component: UserDetailsComponent,
    pathMatch: "full"
  }
]

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    CardModule,
    ButtonModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [UsersService]

})
export class UserDetailsModule {
}
