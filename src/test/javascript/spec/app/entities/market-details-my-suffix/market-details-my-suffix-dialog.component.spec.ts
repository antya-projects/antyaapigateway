/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketDetailsMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix-dialog.component';
import { MarketDetailsMySuffixService } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.service';
import { MarketDetailsMySuffix } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.model';
import { ExchangeMySuffixService } from '../../../../../../main/webapp/app/entities/exchange-my-suffix';
import { MarketMySuffixService } from '../../../../../../main/webapp/app/entities/market-my-suffix';

describe('Component Tests', () => {

    describe('MarketDetailsMySuffix Management Dialog Component', () => {
        let comp: MarketDetailsMySuffixDialogComponent;
        let fixture: ComponentFixture<MarketDetailsMySuffixDialogComponent>;
        let service: MarketDetailsMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketDetailsMySuffixDialogComponent],
                providers: [
                    ExchangeMySuffixService,
                    MarketMySuffixService,
                    MarketDetailsMySuffixService
                ]
            })
            .overrideTemplate(MarketDetailsMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketDetailsMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketDetailsMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new MarketDetailsMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.marketDetails = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'marketDetailsListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new MarketDetailsMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.marketDetails = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'marketDetailsListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
