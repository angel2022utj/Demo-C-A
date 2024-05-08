import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RopaComponent } from './components/ropa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RopaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'proyecto';
}
