import { Routes } from '@angular/router';
import { SignatureDayComponent } from './signature-day/signature-day.component';

export const routes: Routes = [
    { path: '', component: SignatureDayComponent }, // Default route
    { path: 'signatureday', component: SignatureDayComponent }
];
