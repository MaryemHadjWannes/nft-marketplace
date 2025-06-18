import { Injectable } from '@angular/core';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private web3Modal: Web3Modal | null = null;
  private provider: any;
  private signer: any;
  private _walletAddress: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions: {}
      });
    }
  }

  async connectWallet(): Promise<string | null> {
    if (!this.web3Modal) {
      console.error('Web3Modal not initialized: window is undefined');
      return null;
    }

    const instance = await this.web3Modal.connect();
    this.provider = new ethers.BrowserProvider(instance); // Ethers v6
    this.signer = await this.provider.getSigner();
    this._walletAddress = await this.signer.getAddress();
    console.log('Connected:', this._walletAddress);
    return this._walletAddress;
  }

  get walletAddress(): string | null {
    return this._walletAddress;
  }

  async disconnectWallet() {
    if (this.web3Modal) {
      await this.web3Modal.clearCachedProvider();
    }
    this._walletAddress = null;
  }
}
