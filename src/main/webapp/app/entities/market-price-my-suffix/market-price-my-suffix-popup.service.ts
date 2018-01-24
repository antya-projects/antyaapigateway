import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { MarketPriceMySuffix } from './market-price-my-suffix.model';
import { MarketPriceMySuffixService } from './market-price-my-suffix.service';

@Injectable()
export class MarketPriceMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private marketPriceService: MarketPriceMySuffixService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.marketPriceService.find(id).subscribe((marketPrice) => {
                    marketPrice.timeStamp = this.datePipe
                        .transform(marketPrice.timeStamp, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.marketPriceModalRef(component, marketPrice);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.marketPriceModalRef(component, new MarketPriceMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    marketPriceModalRef(component: Component, marketPrice: MarketPriceMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.marketPrice = marketPrice;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
