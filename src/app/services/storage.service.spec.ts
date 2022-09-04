import {TestBed} from '@angular/core/testing';
import {StorageService} from "./storage.service";


describe('storageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set item to localstorage', () => {
      service.set_item('testkey', 123)
      const valueFromStorage = JSON.parse(localStorage.getItem('testkey')!);
      expect(valueFromStorage).toBe(123)
    }
  )
  it('should set and get item from localstorage', () => {
      service.set_item('testkey', 123)
      const valueFromStorage = JSON.parse(service.get_item('testkey')!);
      expect(valueFromStorage).toBe(123)
    }
  )

  it('should generate key for given id', () => {
      const key = service.get_user_is_favourite_store_key(4);
      expect(key).toBe('$user-4-is_favourite')
    }
  )
});
