import {Component, OnInit} from '@angular/core';
import {User, UsersService} from "../services/users.service";
import {FormControl, FormGroup} from "@angular/forms";

interface Pager {
  first: number,
  rows: number
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  filterForm = new FormGroup({
    first_name: new FormControl<string>(''),
    last_name: new FormControl<string>(''),
  })

  users: User[] = []
  totalRecords: number = 0;
  pager: Pager = {first: 0, rows: 5}


  constructor(
    private _usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(() => this.load_users())
  }

  set_pager_and_load(pager: Pager) {
    this.pager = pager;
    this.load_users()
  }

  load_users() {
    const {first, rows} = this.pager;
    const page = Math.floor(first / rows) + 1;

    const {first_name, last_name} = this.filterForm.value;

    this._usersService.get_users(page, rows).subscribe(response => {
      this.totalRecords = response.total;
      this.users = response.data.filter(user =>
        this._is_sub_string(user.first_name, first_name as string) &&
        this._is_sub_string(user.last_name, last_name as string)
      ).map(user => ({
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


  private _is_sub_string(base: string, sub_string: string): boolean {
    return base.toLowerCase().includes(sub_string.toLowerCase())
  }
}
