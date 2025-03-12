import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonals',
  imports: [CommonModule],
  templateUrl: './testimonals.component.html',
  styleUrl: './testimonals.component.scss'
})
export class TestimonalsComponent {
  testimonials = [
    {
      name: 'Puri Panda',
      position: 'Pani Puri Franchise',
      company: 'India',
      quote: 'This service is amazing! They provide t-shirts for our brand across India. Trust worthy and on time.',
      photo: './assets/testimonal1.svg',
      rating: 5 // Star rating
    },
    {
      name: 'BVRIT-Hyd',
      position: 'Engineering College',
      company: 'Hyderabad',
      quote: 'Stalwart Prints did an amazing job on our signature event tees! The quality was top-notch, and they delivered exactly when we needed them. The design was awesome, we just loved it 💕. Thanks, Stalwart Prints!',
      photo: './assets/testimonal2.svg',
      rating: 5 // Star rating
    },
    {
      name: 'Redtortue',
      position: 'Fashion Brand',
      company: 'India',
      quote: 'The user experience was fantastic, we do printing on our fabrics for our brand.',
      photo: './assets/testimonal3.svg',
      rating: 5 // Star rating
    }
  ];
}
