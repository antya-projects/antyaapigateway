import { BaseEntity } from './../../shared';

export class CoinAttributesMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public minConfirmation?: number,
        public txnFees?: number,
        public coinId?: number,
    ) {
    }
}
