/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { ExchangeMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix-delete-dialog.component';
import { ExchangeMySuffixService } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.service';

describe('Component Tests', () => {

    describe('ExchangeMySuffix Management Delete Component', () => {
        let comp: ExchangeMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<ExchangeMySuffixDeleteDialogComponent>;
        let service: ExchangeMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [ExchangeMySuffixDeleteDialogComponent],
                providers: [
                    ExchangeMySuffixService
                ]
            })
            .overrideTemplate(ExchangeMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ExchangeMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ExchangeMySuffixService);
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
