/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { CoinAttributesMySuffixComponent } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix/coin-attributes-my-suffix.component';
import { CoinAttributesMySuffixService } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix/coin-attributes-my-suffix.service';
import { CoinAttributesMySuffix } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix/coin-attributes-my-suffix.model';

describe('Component Tests', () => {

    describe('CoinAttributesMySuffix Management Component', () => {
        let comp: CoinAttributesMySuffixComponent;
        let fixture: ComponentFixture<CoinAttributesMySuffixComponent>;
        let service: CoinAttributesMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [CoinAttributesMySuffixComponent],
                providers: [
                    CoinAttributesMySuffixService
                ]
            })
            .overrideTemplate(CoinAttributesMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoinAttributesMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CoinAttributesMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new CoinAttributesMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.coinAttributes[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
