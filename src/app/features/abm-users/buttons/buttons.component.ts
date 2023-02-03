import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() modifyUser = () => {};
  @Input() deleteUser: (id: number) => void = () => {};
  @Input() id: number = 0;

  constructor() {}
}
