/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { CoinMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix-detail.component';
import { CoinMySuffixService } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.service';
import { CoinMySuffix } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.model';

describe('Component Tests', () => {

    describe('CoinMySuffix Management Detail Component', () => {
        let comp: CoinMySuffixDetailComponent;
        let fixture: ComponentFixture<CoinMySuffixDetailComponent>;
        let service: CoinMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [CoinMySuffixDetailComponent],
                providers: [
                    CoinMySuffixService
                ]
            })
            .overrideTemplate(CoinMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoinMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CoinMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new CoinMySuffix(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.coin).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
