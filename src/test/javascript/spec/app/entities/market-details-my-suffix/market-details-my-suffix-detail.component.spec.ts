/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketDetailsMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix-detail.component';
import { MarketDetailsMySuffixService } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.service';
import { MarketDetailsMySuffix } from '../../../../../../main/webapp/app/entities/market-details-my-suffix/market-details-my-suffix.model';

describe('Component Tests', () => {

    describe('MarketDetailsMySuffix Management Detail Component', () => {
        let comp: MarketDetailsMySuffixDetailComponent;
        let fixture: ComponentFixture<MarketDetailsMySuffixDetailComponent>;
        let service: MarketDetailsMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketDetailsMySuffixDetailComponent],
                providers: [
                    MarketDetailsMySuffixService
                ]
            })
            .overrideTemplate(MarketDetailsMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketDetailsMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketDetailsMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new MarketDetailsMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.marketDetails).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
