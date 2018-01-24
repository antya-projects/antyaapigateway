import { BaseEntity } from './../../shared';

export class CoinMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public coinCode?: string,
        public coinInfoUrl?: string,
        public coinImageUrl?: string,
        public coinName?: string,
        public isActive?: number,
        public coinAttributesId?: number,
    ) {
    }
}
