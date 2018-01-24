import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { MarketDetailsMySuffixComponent } from './market-details-my-suffix.component';
import { MarketDetailsMySuffixDetailComponent } from './market-details-my-suffix-detail.component';
import { MarketDetailsMySuffixPopupComponent } from './market-details-my-suffix-dialog.component';
import { MarketDetailsMySuffixDeletePopupComponent } from './market-details-my-suffix-delete-dialog.component';

export const marketDetailsRoute: Routes = [
    {
        path: 'market-details-my-suffix',
        component: MarketDetailsMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketDetails.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'market-details-my-suffix/:id',
        component: MarketDetailsMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketDetails.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const marketDetailsPopupRoute: Routes = [
    {
        path: 'market-details-my-suffix-new',
        component: MarketDetailsMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketDetails.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'market-details-my-suffix/:id/edit',
        component: MarketDetailsMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketDetails.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'market-details-my-suffix/:id/delete',
        component: MarketDetailsMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketDetails.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
