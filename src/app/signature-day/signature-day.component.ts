import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signature-day',
  imports: [CommonModule ],
  templateUrl: './signature-day.component.html',
  standalone: true,
  styleUrl: './signature-day.component.scss'
})
export class SignatureDayComponent {
   // Array of designs with their data
   designs = [
    { id: 'Rectangular', title: 'Rectangular Collage', imgSrc: 'assets/1.svg', price: 'Rs 150' },
    { id: 'Hexagonal design1', title: 'Hexagonal 1 Collage', imgSrc: 'assets/2.svg', price: 'Rs 150' },
    { id: 'Hexagonal design2', title: 'Hexagonal 2 Collage', imgSrc: 'assets/3.svg', price: 'Rs 150' },
    { id: 'Hexagonal design3', title: 'Hexagonal 3 Collage', imgSrc: 'assets/4.svg', price: 'Rs 150' },
    { id: 'Hexagonal design4', title: 'Hexagonal 4 Collage', imgSrc: 'assets/5.svg', price: 'Rs 150' },
    { id: 'FriendsGroup design', title: 'Friends Group Collage', imgSrc: 'assets/6.svg', price: 'Rs 150' },
    { id: 'Heart design', title: 'Heart Collage', imgSrc: 'assets/7.svg', price: 'Rs 150' },
    { id: 'Same Shape Collage', title: 'Same Shape Collage', imgSrc: 'assets/8.svg', price: 'Rs 130' },
    { id: 'Rainbow design', title: 'Rainbow Collage', imgSrc: 'assets/9.svg', price: 'Rs 150' },
  ];

  getWhatsAppLink(designId: string): string {
    const message = `Hello, I would like to order ${designId}`;
    return `https://wa.me/+916303932539?text=${encodeURIComponent(message)}`;
  }
}
