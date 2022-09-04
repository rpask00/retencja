import {TestBed} from '@angular/core/testing';
import {UsersService} from "./users.service";
import {HttpClientModule} from "@angular/common/http";
import {firstValueFrom} from "rxjs";


describe('usersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should fetch users', async () => {
    const users = await firstValueFrom(service.get_users$(0, 10))
    expect(users.data.length).toEqual(10)
  });


  it('should fetch user', async () => {
    const user = await firstValueFrom(service.get_user$(1))
    expect(user.first_name).toBeTruthy()
    expect(user.last_name).toBeTruthy()
    expect(user.email).toBeTruthy()
    expect(user.avatar).toBeTruthy()
  });


  it('set user as favourite', async () => {
    service.set_user_is_favourite(4, true);
    expect(service.get_user_is_favourite(4)).toBeTrue()
  });

  it('toggle user ss favourite', async () => {
    service.toggle_user_is_favourite(6);
    expect(service.get_user_is_favourite(6)).toBeTrue()
    service.toggle_user_is_favourite(6);
    expect(service.get_user_is_favourite(6)).toBeFalse()
  });

});
