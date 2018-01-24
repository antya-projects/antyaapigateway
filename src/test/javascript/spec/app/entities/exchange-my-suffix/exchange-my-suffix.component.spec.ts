/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { ExchangeMySuffixComponent } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.component';
import { ExchangeMySuffixService } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.service';
import { ExchangeMySuffix } from '../../../../../../main/webapp/app/entities/exchange-my-suffix/exchange-my-suffix.model';

describe('Component Tests', () => {

    describe('ExchangeMySuffix Management Component', () => {
        let comp: ExchangeMySuffixComponent;
        let fixture: ComponentFixture<ExchangeMySuffixComponent>;
        let service: ExchangeMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [ExchangeMySuffixComponent],
                providers: [
                    ExchangeMySuffixService
                ]
            })
            .overrideTemplate(ExchangeMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ExchangeMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ExchangeMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new ExchangeMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.exchanges[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
