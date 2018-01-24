import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MarketMySuffix } from './market-my-suffix.model';
import { MarketMySuffixPopupService } from './market-my-suffix-popup.service';
import { MarketMySuffixService } from './market-my-suffix.service';
import { CoinMySuffix, CoinMySuffixService } from '../coin-my-suffix';
import { ExchangeMySuffix, ExchangeMySuffixService } from '../exchange-my-suffix';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-market-my-suffix-dialog',
    templateUrl: './market-my-suffix-dialog.component.html'
})
export class MarketMySuffixDialogComponent implements OnInit {

    market: MarketMySuffix;
    isSaving: boolean;

    coins: CoinMySuffix[];

    exchanges: ExchangeMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private marketService: MarketMySuffixService,
        private coinService: CoinMySuffixService,
        private exchangeService: ExchangeMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.coinService
            .query({filter: 'market-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.market.coinId) {
                    this.coins = res.json;
                } else {
                    this.coinService
                        .find(this.market.coinId)
                        .subscribe((subRes: CoinMySuffix) => {
                            this.coins = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.exchangeService
            .query({filter: 'market-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.market.exchangeId) {
                    this.exchanges = res.json;
                } else {
                    this.exchangeService
                        .find(this.market.exchangeId)
                        .subscribe((subRes: ExchangeMySuffix) => {
                            this.exchanges = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.market.id !== undefined) {
            this.subscribeToSaveResponse(
                this.marketService.update(this.market));
        } else {
            this.subscribeToSaveResponse(
                this.marketService.create(this.market));
        }
    }

    private subscribeToSaveResponse(result: Observable<MarketMySuffix>) {
        result.subscribe((res: MarketMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MarketMySuffix) {
        this.eventManager.broadcast({ name: 'marketListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackCoinById(index: number, item: CoinMySuffix) {
        return item.id;
    }

    trackExchangeById(index: number, item: ExchangeMySuffix) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-market-my-suffix-popup',
    template: ''
})
export class MarketMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private marketPopupService: MarketMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.marketPopupService
                    .open(MarketMySuffixDialogComponent as Component, params['id']);
            } else {
                this.marketPopupService
                    .open(MarketMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
