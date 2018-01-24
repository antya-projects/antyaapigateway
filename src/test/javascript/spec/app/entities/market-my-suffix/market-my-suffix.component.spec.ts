/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { MarketMySuffixComponent } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix.component';
import { MarketMySuffixService } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix.service';
import { MarketMySuffix } from '../../../../../../main/webapp/app/entities/market-my-suffix/market-my-suffix.model';

describe('Component Tests', () => {

    describe('MarketMySuffix Management Component', () => {
        let comp: MarketMySuffixComponent;
        let fixture: ComponentFixture<MarketMySuffixComponent>;
        let service: MarketMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [MarketMySuffixComponent],
                providers: [
                    MarketMySuffixService
                ]
            })
            .overrideTemplate(MarketMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MarketMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MarketMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new MarketMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.markets[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
