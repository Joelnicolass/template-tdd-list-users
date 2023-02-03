import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { By } from '@angular/platform-browser';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with text "Eliminar"', () => {
    const button = fixture.debugElement.query(By.css('.btn-delete'));
    expect(button.nativeElement.textContent).toMatch(/Eliminar/i);
  });

  it('should have a button with text "Modificar"', () => {
    const button = fixture.debugElement.query(By.css('.btn-edit'));
    expect(button.nativeElement.textContent).toMatch(/Modificar/i);
  });

  it('btn-add should call modifyUser()', () => {
    const comp = component as any;
    const spy = spyOn(comp, 'modifyUser');

    const button = fixture.debugElement.query(By.css('.btn-edit'));
    button.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });

  it('btn-delete should call deleteUser()', () => {
    const comp = component as any;
    const spy = spyOn(comp, 'deleteUser');

    const button = fixture.debugElement.query(By.css('.btn-delete'));
    button.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });
});
