import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon-Angular';
  childData: boolean = true;
  handleChildData(hide: boolean) {
    this.childData = hide;
  }

}
