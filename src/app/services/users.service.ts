import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {StorageService} from "./storage.service";


export interface GetUsersResponse {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: User[]
}

export interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
  is_favourite?: boolean
}

@Injectable()
export class UsersService {

  readonly base_resource = "https://reqres.in/api";


  constructor(
    private _http: HttpClient,
    private _store: StorageService
  ) {
  }


  get_users(page: number = 0, per_page: number = 10): Observable<GetUsersResponse> {

    return this._http.get<GetUsersResponse>(`${this.base_resource}/users?page=${page}&per_page=${per_page}`)
  }

  get_user(id: number): Observable<User> {
    return this._http.get<{ data: User }>(`${this.base_resource}/users/${id}`).pipe(map(response => response.data))
  }


  // TODO: move to separate service?
  get_user_is_favourite(id: number): boolean {
    const is_favourite = this._store.get_item(this._get_user_is_favourite_store_key(id))
    return is_favourite != null ? JSON.parse(is_favourite) : false
  }

  set_user_is_favourite(id: number, is_favourite: boolean) {
    this._store.set_item(this._get_user_is_favourite_store_key(id), is_favourite)
  }

  toggle_user_is_favourite(id: number) {
    const is_favourite = this.get_user_is_favourite(id);
    this.set_user_is_favourite(id, !is_favourite);

  }

  private _get_user_is_favourite_store_key(id: number) {
    return `$user-${id}-is_favourite`
  }

}
