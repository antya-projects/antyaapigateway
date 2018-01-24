/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketPriceMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix-delete-dialog.component';
import { MarketPriceMySuffixService } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.service';

describe('Component Tests', () => {

    describe('MarketPriceMySuffix Management Delete Component', () => {
        let comp: MarketPriceMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<MarketPriceMySuffixDeleteDialogComponent>;
        let service: MarketPriceMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketPriceMySuffixDeleteDialogComponent],
                providers: [
                    MarketPriceMySuffixService
                ]
            })
            .overrideTemplate(MarketPriceMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketPriceMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketPriceMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
