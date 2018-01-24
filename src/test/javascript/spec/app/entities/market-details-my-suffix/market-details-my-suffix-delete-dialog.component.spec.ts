/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketDetailsMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix-delete-dialog.component';
import { MarketDetailsMySuffixService } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.service';

describe('Component Tests', () => {

    describe('MarketDetailsMySuffix Management Delete Component', () => {
        let comp: MarketDetailsMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<MarketDetailsMySuffixDeleteDialogComponent>;
        let service: MarketDetailsMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketDetailsMySuffixDeleteDialogComponent],
                providers: [
                    MarketDetailsMySuffixService
                ]
            })
            .overrideTemplate(MarketDetailsMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketDetailsMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketDetailsMySuffixService);
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
