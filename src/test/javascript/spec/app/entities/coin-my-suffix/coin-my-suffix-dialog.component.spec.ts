/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { CoinMySuffixDialogComponent } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix-dialog.component';
import { CoinMySuffixService } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.service';
import { CoinMySuffix } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.model';
import { CoinAttributesMySuffixService } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix';

describe('Component Tests', () => {

    describe('CoinMySuffix Management Dialog Component', () => {
        let comp: CoinMySuffixDialogComponent;
        let fixture: ComponentFixture<CoinMySuffixDialogComponent>;
        let service: CoinMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [CoinMySuffixDialogComponent],
                providers: [
                    CoinAttributesMySuffixService,
                    CoinMySuffixService
                ]
            })
            .overrideTemplate(CoinMySuffixDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoinMySuffixDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CoinMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new CoinMySuffix(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.coin = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'coinListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new CoinMySuffix();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.coin = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'coinListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
