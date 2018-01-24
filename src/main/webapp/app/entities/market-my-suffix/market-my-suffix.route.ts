import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { MarketMySuffixComponent } from './market-my-suffix.component';
import { MarketMySuffixDetailComponent } from './market-my-suffix-detail.component';
import { MarketMySuffixPopupComponent } from './market-my-suffix-dialog.component';
import { MarketMySuffixDeletePopupComponent } from './market-my-suffix-delete-dialog.component';

export const marketRoute: Routes = [
    {
        path: 'market-my-suffix',
        component: MarketMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.market.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'market-my-suffix/:id',
        component: MarketMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.market.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const marketPopupRoute: Routes = [
    {
        path: 'market-my-suffix-new',
        component: MarketMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.market.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'market-my-suffix/:id/edit',
        component: MarketMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.market.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'market-my-suffix/:id/delete',
        component: MarketMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.market.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
