import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntyaapigatewaySharedModule } from '../../shared';
import {
    MarketPriceMySuffixService,
    MarketPriceMySuffixPopupService,
    MarketPriceMySuffixComponent,
    MarketPriceMySuffixDetailComponent,
    MarketPriceMySuffixDialogComponent,
    MarketPriceMySuffixPopupComponent,
    MarketPriceMySuffixDeletePopupComponent,
    MarketPriceMySuffixDeleteDialogComponent,
    marketPriceRoute,
    marketPricePopupRoute,
} from './';

const ENTITY_STATES = [
    ...marketPriceRoute,
    ...marketPricePopupRoute,
];

@NgModule({
    imports: [
        AntyaapigatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MarketPriceMySuffixComponent,
        MarketPriceMySuffixDetailComponent,
        MarketPriceMySuffixDialogComponent,
        MarketPriceMySuffixDeleteDialogComponent,
        MarketPriceMySuffixPopupComponent,
        MarketPriceMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        MarketPriceMySuffixComponent,
        MarketPriceMySuffixDialogComponent,
        MarketPriceMySuffixPopupComponent,
        MarketPriceMySuffixDeleteDialogComponent,
        MarketPriceMySuffixDeletePopupComponent,
    ],
    providers: [
        MarketPriceMySuffixService,
        MarketPriceMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyaapigatewayMarketPriceMySuffixModule {}
