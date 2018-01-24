import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MarketPriceMySuffix } from './market-price-my-suffix.model';
import { MarketPriceMySuffixPopupService } from './market-price-my-suffix-popup.service';
import { MarketPriceMySuffixService } from './market-price-my-suffix.service';
import { ExchangeMySuffix, ExchangeMySuffixService } from '../exchange-my-suffix';
import { MarketMySuffix, MarketMySuffixService } from '../market-my-suffix';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-market-price-my-suffix-dialog',
    templateUrl: './market-price-my-suffix-dialog.component.html'
})
export class MarketPriceMySuffixDialogComponent implements OnInit {

    marketPrice: MarketPriceMySuffix;
    isSaving: boolean;

    exchanges: ExchangeMySuffix[];

    markets: MarketMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private marketPriceService: MarketPriceMySuffixService,
        private exchangeService: ExchangeMySuffixService,
        private marketService: MarketMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.exchangeService
            .query({filter: 'marketprice-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.marketPrice.exchangeId) {
                    this.exchanges = res.json;
                } else {
                    this.exchangeService
                        .find(this.marketPrice.exchangeId)
                        .subscribe((subRes: ExchangeMySuffix) => {
                            this.exchanges = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.marketService.query()
            .subscribe((res: ResponseWrapper) => { this.markets = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.marketPrice.id !== undefined) {
            this.subscribeToSaveResponse(
                this.marketPriceService.update(this.marketPrice));
        } else {
            this.subscribeToSaveResponse(
                this.marketPriceService.create(this.marketPrice));
        }
    }

    private subscribeToSaveResponse(result: Observable<MarketPriceMySuffix>) {
        result.subscribe((res: MarketPriceMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MarketPriceMySuffix) {
        this.eventManager.broadcast({ name: 'marketPriceListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackExchangeById(index: number, item: ExchangeMySuffix) {
        return item.id;
    }

    trackMarketById(index: number, item: MarketMySuffix) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-market-price-my-suffix-popup',
    template: ''
})
export class MarketPriceMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private marketPricePopupService: MarketPriceMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.marketPricePopupService
                    .open(MarketPriceMySuffixDialogComponent as Component, params['id']);
            } else {
                this.marketPricePopupService
                    .open(MarketPriceMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
