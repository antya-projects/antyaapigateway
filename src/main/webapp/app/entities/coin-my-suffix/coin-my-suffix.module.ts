import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntyaapigatewaySharedModule } from '../../shared';
import {
    CoinMySuffixService,
    CoinMySuffixPopupService,
    CoinMySuffixComponent,
    CoinMySuffixDetailComponent,
    CoinMySuffixDialogComponent,
    CoinMySuffixPopupComponent,
    CoinMySuffixDeletePopupComponent,
    CoinMySuffixDeleteDialogComponent,
    coinRoute,
    coinPopupRoute,
} from './';

const ENTITY_STATES = [
    ...coinRoute,
    ...coinPopupRoute,
];

@NgModule({
    imports: [
        AntyaapigatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CoinMySuffixComponent,
        CoinMySuffixDetailComponent,
        CoinMySuffixDialogComponent,
        CoinMySuffixDeleteDialogComponent,
        CoinMySuffixPopupComponent,
        CoinMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        CoinMySuffixComponent,
        CoinMySuffixDialogComponent,
        CoinMySuffixPopupComponent,
        CoinMySuffixDeleteDialogComponent,
        CoinMySuffixDeletePopupComponent,
    ],
    providers: [
        CoinMySuffixService,
        CoinMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyaapigatewayCoinMySuffixModule {}
