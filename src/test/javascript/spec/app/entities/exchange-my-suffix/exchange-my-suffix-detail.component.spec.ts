/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { ExchangeMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix-detail.component';
import { ExchangeMySuffixService } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.service';
import { ExchangeMySuffix } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.model';

describe('Component Tests', () => {

    describe('ExchangeMySuffix Management Detail Component', () => {
        let comp: ExchangeMySuffixDetailComponent;
        let fixture: ComponentFixture<ExchangeMySuffixDetailComponent>;
        let service: ExchangeMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [ExchangeMySuffixDetailComponent],
                providers: [
                    ExchangeMySuffixService
                ]
            })
            .overrideTemplate(ExchangeMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ExchangeMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ExchangeMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new ExchangeMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.exchange).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
