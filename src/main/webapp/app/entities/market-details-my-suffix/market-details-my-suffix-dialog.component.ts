import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MarketDetailsMySuffix } from './market-details-my-suffix.model';
import { MarketDetailsMySuffixPopupService } from './market-details-my-suffix-popup.service';
import { MarketDetailsMySuffixService } from './market-details-my-suffix.service';
import { ExchangeMySuffix, ExchangeMySuffixService } from '../exchange-my-suffix';
import { MarketMySuffix, MarketMySuffixService } from '../market-my-suffix';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-market-details-my-suffix-dialog',
    templateUrl: './market-details-my-suffix-dialog.component.html'
})
export class MarketDetailsMySuffixDialogComponent implements OnInit {

    marketDetails: MarketDetailsMySuffix;
    isSaving: boolean;

    exchanges: ExchangeMySuffix[];

    markets: MarketMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private marketDetailsService: MarketDetailsMySuffixService,
        private exchangeService: ExchangeMySuffixService,
        private marketService: MarketMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.exchangeService.query()
            .subscribe((res: ResponseWrapper) => { this.exchanges = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.marketService.query()
            .subscribe((res: ResponseWrapper) => { this.markets = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.marketDetails.id !== undefined) {
            this.subscribeToSaveResponse(
                this.marketDetailsService.update(this.marketDetails));
        } else {
            this.subscribeToSaveResponse(
                this.marketDetailsService.create(this.marketDetails));
        }
    }

    private subscribeToSaveResponse(result: Observable<MarketDetailsMySuffix>) {
        result.subscribe((res: MarketDetailsMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MarketDetailsMySuffix) {
        this.eventManager.broadcast({ name: 'marketDetailsListModification', content: 'OK'});
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
    selector: 'jhi-market-details-my-suffix-popup',
    template: ''
})
export class MarketDetailsMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private marketDetailsPopupService: MarketDetailsMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.marketDetailsPopupService
                    .open(MarketDetailsMySuffixDialogComponent as Component, params['id']);
            } else {
                this.marketDetailsPopupService
                    .open(MarketDetailsMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
