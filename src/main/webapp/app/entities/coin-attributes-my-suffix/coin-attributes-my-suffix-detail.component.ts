import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { CoinAttributesMySuffix } from './coin-attributes-my-suffix.model';
import { CoinAttributesMySuffixService } from './coin-attributes-my-suffix.service';

@Component({
    selector: 'jhi-coin-attributes-my-suffix-detail',
    templateUrl: './coin-attributes-my-suffix-detail.component.html'
})
export class CoinAttributesMySuffixDetailComponent implements OnInit, OnDestroy {

    coinAttributes: CoinAttributesMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private coinAttributesService: CoinAttributesMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInCoinAttributes();
    }

    load(id) {
        this.coinAttributesService.find(id).subscribe((coinAttributes) => {
            this.coinAttributes = coinAttributes;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInCoinAttributes() {
        this.eventSubscriber = this.eventManager.subscribe(
            'coinAttributesListModification',
            (response) => this.load(this.coinAttributes.id)
        );
    }
}
