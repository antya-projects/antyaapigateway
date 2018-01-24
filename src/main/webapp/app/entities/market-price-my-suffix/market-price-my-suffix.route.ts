import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { MarketPriceMySuffixComponent } from './market-price-my-suffix.component';
import { MarketPriceMySuffixDetailComponent } from './market-price-my-suffix-detail.component';
import { MarketPriceMySuffixPopupComponent } from './market-price-my-suffix-dialog.component';
import { MarketPriceMySuffixDeletePopupComponent } from './market-price-my-suffix-delete-dialog.component';

export const marketPriceRoute: Routes = [
    {
        path: 'market-price-my-suffix',
        component: MarketPriceMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketPrice.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'market-price-my-suffix/:id',
        component: MarketPriceMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketPrice.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const marketPricePopupRoute: Routes = [
    {
        path: 'market-price-my-suffix-new',
        component: MarketPriceMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketPrice.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'market-price-my-suffix/:id/edit',
        component: MarketPriceMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketPrice.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'market-price-my-suffix/:id/delete',
        component: MarketPriceMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.marketPrice.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
