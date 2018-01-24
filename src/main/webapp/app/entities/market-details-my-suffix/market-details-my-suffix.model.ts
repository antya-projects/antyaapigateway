import { BaseEntity } from './../../shared';

export class MarketDetailsMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public highPrice?: number,
        public lowPrice?: number,
        public lastPrice?: number,
        public askPrice?: number,
        public bidPrice?: number,
        public volume24hours?: number,
        public timeStamp?: any,
        public isActive?: number,
        public exchangeId?: number,
        public marketId?: number,
    ) {
    }
}
