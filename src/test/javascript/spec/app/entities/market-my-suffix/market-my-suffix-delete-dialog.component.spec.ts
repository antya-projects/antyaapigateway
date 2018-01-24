/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix-delete-dialog.component';
import { MarketMySuffixService } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix.service';

describe('Component Tests', () => {

    describe('MarketMySuffix Management Delete Component', () => {
        let comp: MarketMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<MarketMySuffixDeleteDialogComponent>;
        let service: MarketMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketMySuffixDeleteDialogComponent],
                providers: [
                    MarketMySuffixService
                ]
            })
            .overrideTemplate(MarketMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketMySuffixService);
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
