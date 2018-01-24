import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { MarketDetailsMySuffix } from './market-details-my-suffix.model';
import { MarketDetailsMySuffixService } from './market-details-my-suffix.service';

@Injectable()
export class MarketDetailsMySuffixPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private marketDetailsService: MarketDetailsMySuffixService

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
                this.marketDetailsService.find(id).subscribe((marketDetails) => {
                    marketDetails.timeStamp = this.datePipe
                        .transform(marketDetails.timeStamp, 'yyyy-MM-ddTHH:mm:ss');
                    this.ngbModalRef = this.marketDetailsModalRef(component, marketDetails);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.marketDetailsModalRef(component, new MarketDetailsMySuffix());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    marketDetailsModalRef(component: Component, marketDetails: MarketDetailsMySuffix): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.marketDetails = marketDetails;
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
