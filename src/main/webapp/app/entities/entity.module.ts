import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AntyaapigatewayCoinMySuffixModule } from './coin-my-suffix/coin-my-suffix.module';
import { AntyaapigatewayCoinAttributesMySuffixModule } from './coin-attributes-my-suffix/coin-attributes-my-suffix.module';
import { AntyaapigatewayMarketMySuffixModule } from './market-my-suffix/market-my-suffix.module';
import { AntyaapigatewayMarketPriceMySuffixModule } from './market-price-my-suffix/market-price-my-suffix.module';
import { AntyaapigatewayMarketDetailsMySuffixModule } from './market-details-my-suffix/market-details-my-suffix.module';
import { AntyaapigatewayExchangeMySuffixModule } from './exchange-my-suffix/exchange-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AntyaapigatewayCoinMySuffixModule,
        AntyaapigatewayCoinAttributesMySuffixModule,
        AntyaapigatewayMarketMySuffixModule,
        AntyaapigatewayMarketPriceMySuffixModule,
        AntyaapigatewayMarketDetailsMySuffixModule,
        AntyaapigatewayExchangeMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyaapigatewayEntityModule {}
