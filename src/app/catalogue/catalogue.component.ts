import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  imports: [CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {
  services = [
    { imageSrc: './assets/sublimationC.svg', title: 'Sublimation Printing', badgeText: 'SUBLIMATION PRINTING' },
    { imageSrc: './assets/dtfC.svg', title: 'D.T.F Printing', badgeText: 'D.T.F PRINTING' },
    { imageSrc: './assets/screenC.svg', title: 'Screen printing', badgeText: 'SCREEN PRINTING' },
    { imageSrc: './assets/embC.svg', title: 'Embroidery', badgeText: 'EMBROIDERY' },
    { imageSrc: './assets/toteC.svg', title: 'Tote-bags', badgeText: 'TOTE-BAGS' },
    { imageSrc: './assets/capC.svg', title: 'Caps', badgeText: 'CAPS' }
  ];
}
