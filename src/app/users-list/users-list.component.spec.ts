import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersListComponent} from './users-list.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {UsersService} from "../services/users.service";


const routes: Routes = [{
  path: "",
  component: UsersListComponent,
  pathMatch: "full"
}];

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        ReactiveFormsModule,
        MatTooltipModule
      ],
      providers: [UsersService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pager', () => {
    component.set_pager_and_load({first: 1, rows: 4})
    expect(component.pager).toEqual({first: 1, rows: 4});
  });
});
