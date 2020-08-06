import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRowComponent } from './user-row.component';
import { By } from '@angular/platform-browser';
import { User } from '../user';

describe('UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = new User('nicolas', 'nicolas@gmx.de','asass');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the name be "nicolas"', () => {
    
  });

  it('should the name be "nicolas" in template', () => {
    //Arrange
    
    //Assert
    
  });

  it('should the name be "andrea" when I change the model in template', () => {
    //Arrange
    
    //Act
    
    //Assert

  });

  it('should show the email when I clicked in button', () => {
    //Arrange

    //Act

    //Assert

  });

  it('should raise selected event when clicked', ()=>{
    //Arrange

    //Act

    //Asert

  });
});
