/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { AntyaapigatewayTestModule } from '../../../test.module';
import { CoinMySuffixComponent } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.component';
import { CoinMySuffixService } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.service';
import { CoinMySuffix } from '../../../../../../main/webapp/app/entities/coin-my-suffix/coin-my-suffix.model';

describe('Component Tests', () => {

    describe('CoinMySuffix Management Component', () => {
        let comp: CoinMySuffixComponent;
        let fixture: ComponentFixture<CoinMySuffixComponent>;
        let service: CoinMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [AntyaapigatewayTestModule],
                declarations: [CoinMySuffixComponent],
                providers: [
                    CoinMySuffixService
                ]
            })
            .overrideTemplate(CoinMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CoinMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CoinMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new CoinMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.coins[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
