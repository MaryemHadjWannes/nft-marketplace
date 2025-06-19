import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore',
  standalone: true,
 imports: [
    CommonModule,
  ],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
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
      title: 'Candy Rush Girl',
      creator: '@digitalartist',
      priceEth: '0.25',
      priceUsd: '$698.75',
      image: '/images/nft4.jpeg',
      avatar: '/images/avatar3.jpeg'
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

  trendingTokens = [
    { symbol: 'ETH', price: '3,250.20', change: 2.1 },
    { symbol: 'SOL', price: '112.50', change: 4.6 },
    { symbol: 'MATIC', price: '0.94', change: 1.8 },
    { symbol: 'APE', price: '1.88', change: -0.7 },
    { symbol: 'AVAX', price: '32.15', change: 5.4 },
    { symbol: 'SAND', price: '0.72', change: 0.9 },
    { symbol: 'ORDI', price: '68.92', change: -2.3 }
  ];

  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

}
