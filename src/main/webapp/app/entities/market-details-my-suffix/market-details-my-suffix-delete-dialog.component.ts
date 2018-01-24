import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MarketDetailsMySuffix } from './market-details-my-suffix.model';
import { MarketDetailsMySuffixPopupService } from './market-details-my-suffix-popup.service';
import { MarketDetailsMySuffixService } from './market-details-my-suffix.service';

@Component({
    selector: 'jhi-market-details-my-suffix-delete-dialog',
    templateUrl: './market-details-my-suffix-delete-dialog.component.html'
})
export class MarketDetailsMySuffixDeleteDialogComponent {

    marketDetails: MarketDetailsMySuffix;

    constructor(
        private marketDetailsService: MarketDetailsMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.marketDetailsService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'marketDetailsListModification',
                content: 'Deleted an marketDetails'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-market-details-my-suffix-delete-popup',
    template: ''
})
export class MarketDetailsMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private marketDetailsPopupService: MarketDetailsMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.marketDetailsPopupService
                .open(MarketDetailsMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
