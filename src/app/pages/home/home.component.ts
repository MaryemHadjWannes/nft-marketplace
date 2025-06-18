import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // ✅ this enables *ngFor, *ngIf, etc.
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  featuredNFTs = [
    {
      title: 'Glitch Hoodie #001',
      creator: '@digitalartist',
      priceEth: '0.45',
      priceUsd: '$1,250.50',
      image: '/images/nft5.jpeg',
      avatar: '/images/avatar1.jpeg'
    },
    {
      title: 'Bearded Brawler',
      creator: '@cyberpunkart',
      priceEth: '1.2',
      priceUsd: '$3,350.00',
      image: '/images/nft1.jpeg',
      avatar: '/images/avatar1.jpeg'
    },
    {
      title: 'Pixel Nomad',
      creator: '@fantasycreator',
      priceEth: '0.85',
      priceUsd: '$2,375.50',
      image: '/images/nft3.jpeg',
      avatar: '/images/avatar2.jpeg'
    },
    {
      title: 'Candy Rush Girl',
      creator: '@digitalartist',
      priceEth: '0.25',
      priceUsd: '$698.75',
      image: '/images/nft4.jpeg',
      avatar: '/images/avatar3.jpeg'
    },
    {
      title: 'Crypto Boss',
      creator: '@digitalartist',
      priceEth: '0.25',
      priceUsd: '$698.75',
      image: '/images/nft7.jpeg',
      avatar: '/images/avatar3.jpeg'
    },
    {
      title: 'Golden Frostbite',
      creator: '@digitalartist',
      priceEth: '0.25',
      priceUsd: '$698.75',
      image: '/images/nft2.jpeg',
      avatar: '/images/avatar3.jpeg'
    }
  ];

  trendingCollections = [
    {
      name: 'Cyber Chimps',
      desc: 'Cyber-enhanced apes ruling the blockchain jungle',
      image: '/images/collection1.jpeg'
    },
    {
      name: 'Pixel Sages',
      desc: 'Retro wizards from a lost 8-bit dimension',
      image: '/images/collection2.jpeg'
    },
    {
      name: 'Penguin Society',
      desc: 'A secret order of noble penguins in disguise',
      image: '/images/collection3.jpeg'
    },
    {
      name: 'Funky Froggos',
      desc: 'Stylish frogs mastering abstract expressionism',
      image: '/images/collection4.jpeg'
    }
  ];

}
