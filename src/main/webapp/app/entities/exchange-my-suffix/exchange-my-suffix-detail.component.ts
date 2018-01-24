import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ExchangeMySuffix } from './exchange-my-suffix.model';
import { ExchangeMySuffixService } from './exchange-my-suffix.service';

@Component({
    selector: 'jhi-exchange-my-suffix-detail',
    templateUrl: './exchange-my-suffix-detail.component.html'
})
export class ExchangeMySuffixDetailComponent implements OnInit, OnDestroy {

    exchange: ExchangeMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private exchangeService: ExchangeMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInExchanges();
    }

    load(id) {
        this.exchangeService.find(id).subscribe((exchange) => {
            this.exchange = exchange;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInExchanges() {
        this.eventSubscriber = this.eventManager.subscribe(
            'exchangeListModification',
            (response) => this.load(this.exchange.id)
        );
    }
}
