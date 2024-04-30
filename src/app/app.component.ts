import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-route-simple';
constructor(private router: Router) {}

  gotoProduct() {
    this.router.navigate(['product'])
  }
}
