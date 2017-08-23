import {Component, EventEmitter, Output} from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output() strSelected = new EventEmitter<string>();

  onSelect(str: string) {
    this.strSelected.emit(str);
  }
}
