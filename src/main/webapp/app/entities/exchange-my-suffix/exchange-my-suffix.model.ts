import { BaseEntity } from './../../shared';

export class ExchangeMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public country?: string,
        public isActive?: number,
    ) {
    }
}
