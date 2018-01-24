/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix-detail.component';
import { MarketMySuffixService } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix.service';
import { MarketMySuffix } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix.model';

describe('Component Tests', () => {

    describe('MarketMySuffix Management Detail Component', () => {
        let comp: MarketMySuffixDetailComponent;
        let fixture: ComponentFixture<MarketMySuffixDetailComponent>;
        let service: MarketMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketMySuffixDetailComponent],
                providers: [
                    MarketMySuffixService
                ]
            })
            .overrideTemplate(MarketMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new MarketMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.market).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
