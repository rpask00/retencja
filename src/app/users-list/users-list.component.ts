import {Component, OnInit} from '@angular/core';
import {User, UsersService} from "./users.service";

interface LoadUsersEvent {
  first: number,
  rows: number
}


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = []
  totalRecords: number = 0;

  constructor(
    private _usersService: UsersService
  ) {
  }

  ngOnInit(): void {
  }

  pageChange($event: any) {
    console.log($event)
  }

  loadUsers(event: LoadUsersEvent) {
    const page = Math.floor(event.first / event.rows) + 1;
    this._usersService.get_users(page, event.rows).subscribe(response => {
      this.totalRecords = response.total;
      this.users = response.data.map(user => ({
        ...user,
        is_favourite: this._usersService.get_user_is_favourite(user.id)
      }));

    })

  }

  toggle_user_is_favourite(id: number) {
    this._usersService.toggle_user_is_favourite(id)
    const user = this.users.find(user => user.id === id);
    if (user) {
      user.is_favourite = this._usersService.get_user_is_favourite(id)
    }
  }
}
