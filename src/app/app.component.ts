import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CorporateGiftsComponent } from './corporate-gifts/corporate-gifts.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignatureDayComponent } from './signature-day/signature-day.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CorporateGiftsComponent,CommonModule,CatalogueComponent,SignatureDayComponent,HighlightsComponent,OurClientsComponent,TestimonalsComponent,FooterComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stalwart-prints';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; 
    });
  }
}
