import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-gifts',
  imports: [CommonModule],
  templateUrl: './corporate-gifts.component.html',
  styleUrl: './corporate-gifts.component.scss'
})
export class CorporateGiftsComponent {
  products = [
    { id: 1, img: './assets/bottles.svg', title: 'BOTTLES'},
    { id: 2, img: './assets/pens.svg', title: 'PENS'},
    { id: 3, img: './assets/keychains.svg', title: 'KEYCHAINS'},
    { id: 4, img: './assets/id-cards.svg', title: 'ID-Cards' },
    { id: 5, img: './assets/badges.svg', title: 'Badges'},
    { id: 6, img: './assets/bags.svg', title: 'BAGS'},
    { id: 7, img: './assets/diaries.svg', title: 'DIARIES'},
    { id: 8, img: './assets/mugs.svg', title: 'MUGS'},
    { id: 9, img: './assets/welcomekits.svg', title: 'WELCOME KITS'},
    { id: 10, img: './assets/tabletops.svg', title: 'TABLE TOPS'},
    { id: 11, img: './assets/leatherbags.svg', title: 'LEATHER BAGS'},
    { id: 12, img: './assets/vacuumflasksets.svg', title: 'FLASK SETS'}
  ];
}
