import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [WalletService]
})
export class NavbarComponent {
  address: string | null = null;

  constructor(public walletService: WalletService) {}

  async connectWallet() {
    this.address = await this.walletService.connectWallet();
  }

  shortAddress(): string {
    if (!this.address) return '';
    return `${this.address.slice(0, 6)}...${this.address.slice(-4)}`;
  }
}
