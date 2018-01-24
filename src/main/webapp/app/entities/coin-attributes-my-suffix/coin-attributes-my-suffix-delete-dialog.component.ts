import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { CoinAttributesMySuffix } from './coin-attributes-my-suffix.model';
import { CoinAttributesMySuffixPopupService } from './coin-attributes-my-suffix-popup.service';
import { CoinAttributesMySuffixService } from './coin-attributes-my-suffix.service';

@Component({
    selector: 'jhi-coin-attributes-my-suffix-delete-dialog',
    templateUrl: './coin-attributes-my-suffix-delete-dialog.component.html'
})
export class CoinAttributesMySuffixDeleteDialogComponent {

    coinAttributes: CoinAttributesMySuffix;

    constructor(
        private coinAttributesService: CoinAttributesMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.coinAttributesService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'coinAttributesListModification',
                content: 'Deleted an coinAttributes'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-coin-attributes-my-suffix-delete-popup',
    template: ''
})
export class CoinAttributesMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private coinAttributesPopupService: CoinAttributesMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.coinAttributesPopupService
                .open(CoinAttributesMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
