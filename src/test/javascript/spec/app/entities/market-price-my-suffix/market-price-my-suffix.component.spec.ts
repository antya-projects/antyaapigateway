/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketPriceMySuffixComponent } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.component';
import { MarketPriceMySuffixService } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.service';
import { MarketPriceMySuffix } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.model';

describe('Component Tests', () => {

    describe('MarketPriceMySuffix Management Component', () => {
        let comp: MarketPriceMySuffixComponent;
        let fixture: ComponentFixture<MarketPriceMySuffixComponent>;
        let service: MarketPriceMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketPriceMySuffixComponent],
                providers: [
                    MarketPriceMySuffixService
                ]
            })
            .overrideTemplate(MarketPriceMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketPriceMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketPriceMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new MarketPriceMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.marketPrices[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
