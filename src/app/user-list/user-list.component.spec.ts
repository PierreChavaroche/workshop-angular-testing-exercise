import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UsersService } from '../user.service';
import { UserRowComponent } from '../user-row/user-row.component';
import { MockUsersService } from '../users.service.mock';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, UserRowComponent ],
      providers: [
        { provide: UsersService, useClass: MockUsersService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created with users', () => {
    
  });

  it('should selectedUser be firts items the array', () => {
    
  });

  it('should have an app-user-row', () => {
    
  });

  it('should raise selected event when clicked', () => {
    
  });
});