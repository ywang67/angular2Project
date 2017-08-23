import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadStr = 'recipe';

  onNavigate(str: string) {
    this.loadStr = str;
  }
}
