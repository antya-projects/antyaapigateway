/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketDetailsMySuffixComponent } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.component';
import { MarketDetailsMySuffixService } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.service';
import { MarketDetailsMySuffix } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.model';

describe('Component Tests', () => {

    describe('MarketDetailsMySuffix Management Component', () => {
        let comp: MarketDetailsMySuffixComponent;
        let fixture: ComponentFixture<MarketDetailsMySuffixComponent>;
        let service: MarketDetailsMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketDetailsMySuffixComponent],
                providers: [
                    MarketDetailsMySuffixService
                ]
            })
            .overrideTemplate(MarketDetailsMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketDetailsMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketDetailsMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new MarketDetailsMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.marketDetails[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
