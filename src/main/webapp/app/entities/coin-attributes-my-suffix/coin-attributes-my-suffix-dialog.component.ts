import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { CoinAttributesMySuffix } from './coin-attributes-my-suffix.model';
import { CoinAttributesMySuffixPopupService } from './coin-attributes-my-suffix-popup.service';
import { CoinAttributesMySuffixService } from './coin-attributes-my-suffix.service';

@Component({
    selector: 'jhi-coin-attributes-my-suffix-dialog',
    templateUrl: './coin-attributes-my-suffix-dialog.component.html'
})
export class CoinAttributesMySuffixDialogComponent implements OnInit {

    coinAttributes: CoinAttributesMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private coinAttributesService: CoinAttributesMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
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
