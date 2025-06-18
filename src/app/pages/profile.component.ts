import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletService } from 'app/services/wallet.service';




@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  address: string | null = null;

  constructor(private walletService: WalletService) {
    this.walletService.connectWallet().then(addr => this.address = addr);
  }
}
