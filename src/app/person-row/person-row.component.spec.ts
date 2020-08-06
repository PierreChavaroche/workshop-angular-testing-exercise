import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRowComponent } from './person-row.component';
import { Person } from '../person';
import { By } from '@angular/platform-browser';

describe('PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ], // declare the test component
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;

    component.person = new Person(
      'nicolas',
      'molina',
      23,
      60,
      1.70
    );
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should the name be 'nicolas'", ()=>{
    
  })

  it("should the age be '23'", ()=>{
    
  })

  it("should the name be 'nicolas' in template", ()=>{

  })

  it("should the name be 'otro nombre' in template when I change", ()=>{

  })

  it("should the age be '23' in template", ()=>{

  })

  it("should the age be '24' in template when I change", ()=>{

  })

})