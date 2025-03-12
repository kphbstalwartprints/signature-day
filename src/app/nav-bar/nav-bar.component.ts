import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  downloadCatalogue(): void {
    const link = document.createElement('a');
    link.href = 'assets/2025Catalogue.pdf';  
    link.download = 'Catalogue.pdf'; 
    link.click(); 
  }
}
