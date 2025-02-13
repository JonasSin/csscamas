import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Login1Component } from "./login-1/login-1.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'camas';
}
