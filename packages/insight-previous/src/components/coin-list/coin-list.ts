import { Component, Input, OnInit } from '@angular/core';
import { Events } from 'ionic-angular';
import _ from 'lodash';
import { AddressProvider } from '../../providers/address/address';
import { Logger } from '../../providers/logger/logger';
import { TxsProvider } from '../../providers/transactions/transactions';

@Component({
  selector: 'coin-list',
  templateUrl: 'coin-list.html'
})
export class CoinListComponent implements OnInit {
  @Input()
  public addrStr?: string;

  public coins: any = [];
  public showTransactions: boolean;
  public loading;
  public limit = 10;
  public chunkSize = 100;

  constructor(
    private addrProvider: AddressProvider,
    private txsProvider: TxsProvider,
    private logger: Logger,
    private events: Events
  ) {}

  public ngOnInit(): void {
    if (this.coins && this.coins.length === 0) {
      this.loading = true;
      this.addrProvider.getAddressActivity(this.addrStr).subscribe(
        data => {
          const formattedData = data.map(this.txsProvider.toAppCoin);
          this.coins = this.orderByHeight(formattedData);
          this.coins = data.map(this.txsProvider.toAppCoin);
          this.showTransactions = true;
          this.loading = false;
          this.events.publish('CoinList', { length: data.length });
        },
        err => {
          this.logger.error(err);
          this.loading = false;
          this.showTransactions = false;
        }
      );
    }
  }

  orderByHeight(data) {
    let processedCoins = [];
    let coins = [];

     data.map(coin => {
      const { mintHeight, mintTxid, value, spentHeight, spentTxid } = coin;

       mintHeight < 0
        ? processedCoins.push({ height: mintHeight, mintTxid, value })
        : coins.push({ height: mintHeight, mintTxid, value });

       spentHeight < 0
        ? processedCoins.push({ height: spentHeight, spentTxid, value })
        : coins.push({ height: spentHeight, spentTxid, value });
    });

     coins = _.orderBy(coins, ['height'], ['desc']);
    processedCoins = processedCoins.concat(coins);
    return processedCoins;
  }

  public loadMore(infiniteScroll) {
    this.limit += this.chunkSize;
    this.chunkSize *= 2;
    infiniteScroll.complete();
  }
}
