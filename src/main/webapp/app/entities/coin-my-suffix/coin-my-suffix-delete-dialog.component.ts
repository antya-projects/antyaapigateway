import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { CoinMySuffix } from './coin-my-suffix.model';
import { CoinMySuffixPopupService } from './coin-my-suffix-popup.service';
import { CoinMySuffixService } from './coin-my-suffix.service';

@Component({
    selector: 'jhi-coin-my-suffix-delete-dialog',
    templateUrl: './coin-my-suffix-delete-dialog.component.html'
})
export class CoinMySuffixDeleteDialogComponent {

    coin: CoinMySuffix;

    constructor(
        private coinService: CoinMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.coinService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'coinListModification',
                content: 'Deleted an coin'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-coin-my-suffix-delete-popup',
    template: ''
})
export class CoinMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private coinPopupService: CoinMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.coinPopupService
                .open(CoinMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
