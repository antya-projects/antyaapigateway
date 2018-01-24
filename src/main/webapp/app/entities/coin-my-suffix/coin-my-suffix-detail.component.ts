import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { CoinMySuffix } from './coin-my-suffix.model';
import { CoinMySuffixService } from './coin-my-suffix.service';

@Component({
    selector: 'jhi-coin-my-suffix-detail',
    templateUrl: './coin-my-suffix-detail.component.html'
})
export class CoinMySuffixDetailComponent implements OnInit, OnDestroy {

    coin: CoinMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private coinService: CoinMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCoins();
    }

    load(id) {
        this.coinService.find(id).subscribe((coin) => {
            this.coin = coin;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCoins() {
        this.eventSubscriber = this.eventManager.subscribe(
            'coinListModification',
            (response) => this.load(this.coin.id)
        );
    }
}
