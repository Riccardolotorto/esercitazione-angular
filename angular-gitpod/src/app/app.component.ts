import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gitpod';

  moltiplica (n : number, m : number)
  {
    return n * m;
  }
}
