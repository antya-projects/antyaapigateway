/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketPriceMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix-dialog.component';
import { MarketPriceMySuffixService } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.service';
import { MarketPriceMySuffix } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.model';
import { ExchangeMySuffixService } from '../../../../../../main/webapp/app/entities/exchange-my-suffix';
import { MarketMySuffixService } from '../../../../../../main/webapp/app/entities/market-my-suffix';

describe('Component Tests', () => {

    describe('MarketPriceMySuffix Management Dialog Component', () => {
        let comp: MarketPriceMySuffixDialogComponent;
        let fixture: ComponentFixture<MarketPriceMySuffixDialogComponent>;
        let service: MarketPriceMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketPriceMySuffixDialogComponent],
                providers: [
                    ExchangeMySuffixService,
                    MarketMySuffixService,
                    MarketPriceMySuffixService
                ]
            })
            .overrideTemplate(MarketPriceMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketPriceMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketPriceMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new MarketPriceMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.marketPrice = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'marketPriceListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new MarketPriceMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.marketPrice = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'marketPriceListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
