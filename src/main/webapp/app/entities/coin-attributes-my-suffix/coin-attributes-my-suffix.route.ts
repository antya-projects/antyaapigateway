import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { CoinAttributesMySuffixComponent } from './coin-attributes-my-suffix.component';
import { CoinAttributesMySuffixDetailComponent } from './coin-attributes-my-suffix-detail.component';
import { CoinAttributesMySuffixPopupComponent } from './coin-attributes-my-suffix-dialog.component';
import { CoinAttributesMySuffixDeletePopupComponent } from './coin-attributes-my-suffix-delete-dialog.component';

export const coinAttributesRoute: Routes = [
    {
        path: 'coin-attributes-my-suffix',
        component: CoinAttributesMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coinAttributes.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'coin-attributes-my-suffix/:id',
        component: CoinAttributesMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coinAttributes.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const coinAttributesPopupRoute: Routes = [
    {
        path: 'coin-attributes-my-suffix-new',
        component: CoinAttributesMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coinAttributes.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'coin-attributes-my-suffix/:id/edit',
        component: CoinAttributesMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coinAttributes.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'coin-attributes-my-suffix/:id/delete',
        component: CoinAttributesMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coinAttributes.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
