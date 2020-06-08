import { Injectable } from '@angular/core';
import {Blockchain} from 'btcn_blockchain_service/src';
import EC from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();
  public walletKeys = [];
  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-adress');
  
  }
}
