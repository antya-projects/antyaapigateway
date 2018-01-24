import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { MarketPriceMySuffix } from './market-price-my-suffix.model';
import { MarketPriceMySuffixService } from './market-price-my-suffix.service';

@Component({
    selector: 'jhi-market-price-my-suffix-detail',
    templateUrl: './market-price-my-suffix-detail.component.html'
})
export class MarketPriceMySuffixDetailComponent implements OnInit, OnDestroy {

    marketPrice: MarketPriceMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private marketPriceService: MarketPriceMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMarketPrices();
    }

    load(id) {
        this.marketPriceService.find(id).subscribe((marketPrice) => {
            this.marketPrice = marketPrice;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMarketPrices() {
        this.eventSubscriber = this.eventManager.subscribe(
            'marketPriceListModification',
            (response) => this.load(this.marketPrice.id)
        );
    }
}
