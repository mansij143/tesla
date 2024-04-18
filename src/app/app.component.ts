import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DisplayImageComponent } from './display-image/display-image.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterModule, HttpClientModule,DisplayImageComponent ],
  templateUrl:'./app.component.html'
  
})
export class AppComponent {
  title = 'tesla-configurator';
}
