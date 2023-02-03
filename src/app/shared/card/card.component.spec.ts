import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    const header = fixture.debugElement.query(By.css('.header'));
    expect(header).toBeTruthy();
  });

  it('should have a body', () => {
    const body = fixture.debugElement.query(By.css('.body'));
    expect(body).toBeTruthy();
  });

  it('should have a footer', () => {
    const footer = fixture.debugElement.query(By.css('.footer'));
    expect(footer).toBeTruthy();
  });
});
