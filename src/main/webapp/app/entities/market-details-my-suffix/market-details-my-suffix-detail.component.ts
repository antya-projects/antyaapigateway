import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { MarketDetailsMySuffix } from './market-details-my-suffix.model';
import { MarketDetailsMySuffixService } from './market-details-my-suffix.service';

@Component({
    selector: 'jhi-market-details-my-suffix-detail',
    templateUrl: './market-details-my-suffix-detail.component.html'
})
export class MarketDetailsMySuffixDetailComponent implements OnInit, OnDestroy {

    marketDetails: MarketDetailsMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private marketDetailsService: MarketDetailsMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMarketDetails();
    }

    load(id) {
        this.marketDetailsService.find(id).subscribe((marketDetails) => {
            this.marketDetails = marketDetails;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMarketDetails() {
        this.eventSubscriber = this.eventManager.subscribe(
            'marketDetailsListModification',
            (response) => this.load(this.marketDetails.id)
        );
    }
}
