import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,  // ✅ Must import
    FooterComponent   // ✅ Must import
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ fixed typo from styleUrl → styleUrls
})
export class App {
  protected title = 'nexus-nft-marketplace';
}
