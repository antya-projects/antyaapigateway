import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { CoinMySuffixComponent } from './coin-my-suffix.component';
import { CoinMySuffixDetailComponent } from './coin-my-suffix-detail.component';
import { CoinMySuffixPopupComponent } from './coin-my-suffix-dialog.component';
import { CoinMySuffixDeletePopupComponent } from './coin-my-suffix-delete-dialog.component';

export const coinRoute: Routes = [
    {
        path: 'coin-my-suffix',
        component: CoinMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coin.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'coin-my-suffix/:id',
        component: CoinMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coin.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const coinPopupRoute: Routes = [
    {
        path: 'coin-my-suffix-new',
        component: CoinMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coin.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'coin-my-suffix/:id/edit',
        component: CoinMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coin.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'coin-my-suffix/:id/delete',
        component: CoinMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'antyaapigatewayApp.coin.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
