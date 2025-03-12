import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { HighlightsComponent } from './highlights/highlights.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HighlightsComponent,OurClientsComponent,TestimonalsComponent,FooterComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stalwart-prints';
}
