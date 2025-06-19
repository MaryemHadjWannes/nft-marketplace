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

  // Add to HomeComponent
  particles = Array.from({length: 20}, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 5
  }));

  categories = [
  'All Items', 'Art', 'Photography', 'Music', 
  'Virtual Worlds', 'Trading Cards', 'Collectibles', 
  'Sports', 'Utility'
];

activeCategory = 'All Items';

setActiveCategory(category: string) {
  this.activeCategory = category;
  // Add your category filtering logic here
}

getCategoryImage(category: string): string {
  const categoryImages: Record<string, string> = {
    'Art': '/images/art.jpeg',
    'Photography': '/images/photography.jpeg',
    'Music': '/images/music.jpeg',
    'Virtual Worlds': '/images/virtual.jpeg',
    'Trading Cards': '/images/trading.jpeg',
    'Collectibles': '/images/collectible.jpeg',
    'Sports': '/images/sport.jpeg',
    'Utility': '/images/utility.jpeg',
    'All Items': '/images/collection2.jpeg'
  };
  return categoryImages[category] || '/images/collection1.jpeg';  
  }

  isPaused = false;
  scrollDirection: 'left' | 'right' = 'left';

  get repeatedCategories() {
    // repeat categories to fill track
    return [...this.categories, ...this.categories, ...this.categories];
  }

  pauseScroll() {
    this.isPaused = true;
  }
  resumeScroll() {
    this.isPaused = false;
  }

  // Optional: reverse scroll direction on key press or swipe
  scrollLeft() {
    this.scrollDirection = 'left';
  }
  scrollRight() {
    this.scrollDirection = 'right';
  }


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
    },
    {
      title: 'Shadow Wanderer', // 🆕 new unique title
      creator: '@digitalartist',
      priceEth: '0.25',
      priceUsd: '$698.75',
      image: '/images/nft9.jpeg',
      avatar: '/images/avatar3.jpeg'
    },
    {
      title: 'Glitch Phantom', // 🆕 another unique title
      creator: '@digitalartist',
      priceEth: '1.2',
      priceUsd: '$3,350.00',
      image: '/images/nft10.jpeg',
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
