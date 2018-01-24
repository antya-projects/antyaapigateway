/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketPriceMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix-detail.component';
import { MarketPriceMySuffixService } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.service';
import { MarketPriceMySuffix } from '../../../../../../main/webapp/app/entities/market-price-my-suffix/market-price-my-suffix.model';

describe('Component Tests', () => {

    describe('MarketPriceMySuffix Management Detail Component', () => {
        let comp: MarketPriceMySuffixDetailComponent;
        let fixture: ComponentFixture<MarketPriceMySuffixDetailComponent>;
        let service: MarketPriceMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketPriceMySuffixDetailComponent],
                providers: [
                    MarketPriceMySuffixService
                ]
            })
            .overrideTemplate(MarketPriceMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketPriceMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketPriceMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new MarketPriceMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.marketPrice).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
