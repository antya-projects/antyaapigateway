import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ExchangeMySuffix } from './exchange-my-suffix.model';
import { ExchangeMySuffixPopupService } from './exchange-my-suffix-popup.service';
import { ExchangeMySuffixService } from './exchange-my-suffix.service';

@Component({
    selector: 'jhi-exchange-my-suffix-dialog',
    templateUrl: './exchange-my-suffix-dialog.component.html'
})
export class ExchangeMySuffixDialogComponent implements OnInit {

    exchange: ExchangeMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private exchangeService: ExchangeMySuffixService,
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
        if (this.exchange.id !== undefined) {
            this.subscribeToSaveResponse(
                this.exchangeService.update(this.exchange));
        } else {
            this.subscribeToSaveResponse(
                this.exchangeService.create(this.exchange));
        }
    }

    private subscribeToSaveResponse(result: Observable<ExchangeMySuffix>) {
        result.subscribe((res: ExchangeMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: ExchangeMySuffix) {
        this.eventManager.broadcast({ name: 'exchangeListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-exchange-my-suffix-popup',
    template: ''
})
export class ExchangeMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private exchangePopupService: ExchangeMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.exchangePopupService
                    .open(ExchangeMySuffixDialogComponent as Component, params['id']);
            } else {
                this.exchangePopupService
                    .open(ExchangeMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
