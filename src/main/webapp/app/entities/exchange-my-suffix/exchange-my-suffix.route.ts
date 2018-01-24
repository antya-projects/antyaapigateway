import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ExchangeMySuffixComponent } from './exchange-my-suffix.component';
import { ExchangeMySuffixDetailComponent } from './exchange-my-suffix-detail.component';
import { ExchangeMySuffixPopupComponent } from './exchange-my-suffix-dialog.component';
import { ExchangeMySuffixDeletePopupComponent } from './exchange-my-suffix-delete-dialog.component';

export const exchangeRoute: Routes = [
    {
        path: 'exchange-my-suffix',
        component: ExchangeMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.exchange.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'exchange-my-suffix/:id',
        component: ExchangeMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.exchange.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const exchangePopupRoute: Routes = [
    {
        path: 'exchange-my-suffix-new',
        component: ExchangeMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.exchange.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'exchange-my-suffix/:id/edit',
        component: ExchangeMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.exchange.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'exchange-my-suffix/:id/delete',
        component: ExchangeMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.exchange.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
