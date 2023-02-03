import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { By } from '@angular/platform-browser';
import { MOCK_USERS } from '../mock/MOCK_USERS';
import { CardComponent } from '../../../shared/card/card.component';
import { ButtonsComponent } from '../buttons/buttons.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUsersComponent, CardComponent, ButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a users', () => {
    const comp = component as any;
    expect(comp.users).toBeDefined();
  });

  it('should have a list of cards with the same length of users', () => {
    const mock = MOCK_USERS;
    const comp = component as any;
    comp.users = mock;

    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-card'));

    expect(cards.length).toBe(mock.length);
  });

  it('should contain app-buttons', () => {
    const comp = component as any;
    comp.users = MOCK_USERS;

    fixture.detectChanges();

    const buttons = fixture.debugElement.query(By.css('app-buttons'));
    expect(buttons).toBeTruthy();
  });
});
