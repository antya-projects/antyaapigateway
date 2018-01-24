import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ExchangeMySuffix } from './exchange-my-suffix.model';
import { ExchangeMySuffixPopupService } from './exchange-my-suffix-popup.service';
import { ExchangeMySuffixService } from './exchange-my-suffix.service';

@Component({
    selector: 'jhi-exchange-my-suffix-delete-dialog',
    templateUrl: './exchange-my-suffix-delete-dialog.component.html'
})
export class ExchangeMySuffixDeleteDialogComponent {

    exchange: ExchangeMySuffix;

    constructor(
        private exchangeService: ExchangeMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.exchangeService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'exchangeListModification',
                content: 'Deleted an exchange'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-exchange-my-suffix-delete-popup',
    template: ''
})
export class ExchangeMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private exchangePopupService: ExchangeMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.exchangePopupService
                .open(ExchangeMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
