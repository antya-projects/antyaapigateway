import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { MarketPriceMySuffix } from './market-price-my-suffix.model';
import { MarketPriceMySuffixPopupService } from './market-price-my-suffix-popup.service';
import { MarketPriceMySuffixService } from './market-price-my-suffix.service';

@Component({
    selector: 'jhi-market-price-my-suffix-delete-dialog',
    templateUrl: './market-price-my-suffix-delete-dialog.component.html'
})
export class MarketPriceMySuffixDeleteDialogComponent {

    marketPrice: MarketPriceMySuffix;

    constructor(
        private marketPriceService: MarketPriceMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.marketPriceService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'marketPriceListModification',
                content: 'Deleted an marketPrice'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-market-price-my-suffix-delete-popup',
    template: ''
})
export class MarketPriceMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private marketPricePopupService: MarketPriceMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.marketPricePopupService
                .open(MarketPriceMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
