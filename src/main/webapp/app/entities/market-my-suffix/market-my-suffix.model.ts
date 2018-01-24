import { BaseEntity } from './../../shared';

export class MarketMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public currencyPairCode?: string,
        public name?: string,
        public marketCurrency?: string,
        public baseCurrency?: string,
        public minTradeSize?: number,
        public maxTradeSize?: number,
        public manualTradeQty?: number,
        public isActive?: number,
        public commission?: number,
        public exchangeId?: number,
    ) {
    }
}
