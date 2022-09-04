import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {User, UsersService} from "../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  private readonly userId: number;

  user$: Observable<User>

  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) {
    this.userId = parseInt(this._route.snapshot.paramMap.get("userId") || '0', 10)
    this.user$ = this._userService.get_user$(this.userId)
  }

  ngOnInit(): void {
  }

  toggle_user_is_favourite(id: number) {
    this._userService.toggle_user_is_favourite(id);
  }

  get user_is_favourite() {
    return this._userService.get_user_is_favourite(this.userId);
  }
}
