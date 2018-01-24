/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { CoinAttributesMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix/coin-attributes-my-suffix-detail.component';
import { CoinAttributesMySuffixService } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix/coin-attributes-my-suffix.service';
import { CoinAttributesMySuffix } from '../../../../../../main/webapp/app/entities/coin-attributes-my-suffix/coin-attributes-my-suffix.model';

describe('Component Tests', () => {

    describe('CoinAttributesMySuffix Management Detail Component', () => {
        let comp: CoinAttributesMySuffixDetailComponent;
        let fixture: ComponentFixture<CoinAttributesMySuffixDetailComponent>;
        let service: CoinAttributesMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [CoinAttributesMySuffixDetailComponent],
                providers: [
                    CoinAttributesMySuffixService
                ]
            })
            .overrideTemplate(CoinAttributesMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoinAttributesMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CoinAttributesMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new CoinAttributesMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.coinAttributes).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
