import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AntyaapigatewaySharedModule } from '../../shared';
import {
    CoinAttributesMySuffixService,
    CoinAttributesMySuffixPopupService,
    CoinAttributesMySuffixComponent,
    CoinAttributesMySuffixDetailComponent,
    CoinAttributesMySuffixDialogComponent,
    CoinAttributesMySuffixPopupComponent,
    CoinAttributesMySuffixDeletePopupComponent,
    CoinAttributesMySuffixDeleteDialogComponent,
    coinAttributesRoute,
    coinAttributesPopupRoute,
} from './';

const ENTITY_STATES = [
    ...coinAttributesRoute,
    ...coinAttributesPopupRoute,
];

@NgModule({
    imports: [
        AntyaapigatewaySharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CoinAttributesMySuffixComponent,
        CoinAttributesMySuffixDetailComponent,
        CoinAttributesMySuffixDialogComponent,
        CoinAttributesMySuffixDeleteDialogComponent,
        CoinAttributesMySuffixPopupComponent,
        CoinAttributesMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        CoinAttributesMySuffixComponent,
        CoinAttributesMySuffixDialogComponent,
        CoinAttributesMySuffixPopupComponent,
        CoinAttributesMySuffixDeleteDialogComponent,
        CoinAttributesMySuffixDeletePopupComponent,
    ],
    providers: [
        CoinAttributesMySuffixService,
        CoinAttributesMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AntyaapigatewayCoinAttributesMySuffixModule {}
