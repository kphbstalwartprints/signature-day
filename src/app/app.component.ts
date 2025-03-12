import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignatureDayComponent } from './signature-day/signature-day.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,NavBarComponent,SignatureDayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stalwart-prints';
}
