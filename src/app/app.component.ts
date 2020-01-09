import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiService } from './services/api-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  title = 'mywork';

  constructor() {

  }


}
