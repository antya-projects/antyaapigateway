import { BaseEntity } from './../../shared';

export class MarketPriceMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public currentPrice?: number,
        public timeStamp?: any,
        public exchangeId?: number,
        public marketId?: number,
    ) {
    }
}
