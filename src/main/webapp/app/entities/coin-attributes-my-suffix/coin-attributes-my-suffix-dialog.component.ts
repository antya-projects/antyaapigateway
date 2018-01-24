import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { CoinAttributesMySuffix } from './coin-attributes-my-suffix.model';
import { CoinAttributesMySuffixPopupService } from './coin-attributes-my-suffix-popup.service';
import { CoinAttributesMySuffixService } from './coin-attributes-my-suffix.service';
import { CoinMySuffix, CoinMySuffixService } from '../coin-my-suffix';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-coin-attributes-my-suffix-dialog',
    templateUrl: './coin-attributes-my-suffix-dialog.component.html'
})
export class CoinAttributesMySuffixDialogComponent implements OnInit {

    coinAttributes: CoinAttributesMySuffix;
    isSaving: boolean;

    coins: CoinMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private coinAttributesService: CoinAttributesMySuffixService,
        private coinService: CoinMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.coinService
            .query({filter: 'coinattributes-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.coinAttributes.coinId) {
                    this.coins = res.json;
                } else {
                    this.coinService
                        .find(this.coinAttributes.coinId)
                        .subscribe((subRes: CoinMySuffix) => {
                            this.coins = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.coinAttributes.id !== undefined) {
            this.subscribeToSaveResponse(
                this.coinAttributesService.update(this.coinAttributes));
        } else {
            this.subscribeToSaveResponse(
                this.coinAttributesService.create(this.coinAttributes));
        }
    }

    private subscribeToSaveResponse(result: Observable<CoinAttributesMySuffix>) {
        result.subscribe((res: CoinAttributesMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: CoinAttributesMySuffix) {
        this.eventManager.broadcast({ name: 'coinAttributesListModification', content: 'OK'});
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
}

@Component({
    selector: 'jhi-coin-attributes-my-suffix-popup',
    template: ''
})
export class CoinAttributesMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private coinAttributesPopupService: CoinAttributesMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.coinAttributesPopupService
                    .open(CoinAttributesMySuffixDialogComponent as Component, params['id']);
            } else {
                this.coinAttributesPopupService
                    .open(CoinAttributesMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
