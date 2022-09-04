import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsComponent } from './users-form.component';

describe('UsersFormComponent', () => {
  let component: UsersDetailsComponent;
  let fixture: ComponentFixture<UsersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
